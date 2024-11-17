import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { AI_PROMPT, SelectBudgetOptions, SelectTravelsList } from "@/constants/options";
import { chatSession } from "@/service/AImodel";
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';

/**
 * 
 * 
 */
function CreateTrip() {

    const [place, setPlace] = useState();
    const [formData, setFormData] = useState();
    const [openDialog, setDialog] = useState(false);
    const [tripPlanned, setTripPlanned] = useState("not planned");  // "not planned" "planning" "planned"
    const loggedIn = false

    const handleInputChange = (name, value) => {


        setFormData({
            ...formData,
            [name]: value
        })
    }

    /**
     * Google Authenticator
     */
    const login = useGoogleLogin({
        onSuccess: (codeResponse) =>
            getUserProfile(codeResponse)
        ,
        onError: (errorResponse) => {
            console.log(`Error: ${errorResponse}`)
        },
    })

    /**
     * method to validate the form input
     */
    const onGenerateTrip = async () => {





        if (formData?.noOfDays >= 60 || formData?.noOfDays < 1 || !formData?.location || !formData?.budget || !formData?.traveler) {
            console.log('invalid input');
            toast('Please enter complete information.');

        }
        else {                                                                                              //valid input

            sessionStorage.setItem('formData', JSON.stringify(formData));
            const user = localStorage.getItem('user');

            if (!user) {                            //not logged in
                setDialog(true);
                console.log('show dialog true');
            }
            setTripPlanned('planning')
            const FINAL_AI_PROMPT = AI_PROMPT
                .replace('{location}', formData?.location.label)
                .replace('{noOfDays}', formData?.noOfDays)
                .replace('{traveler}', formData?.traveler)
                .replace('{budget}', formData?.budget)
            console.log(FINAL_AI_PROMPT);

            const result = await chatSession.sendMessage(FINAL_AI_PROMPT);
            console.log(`results.tripDetails: `,JSON.parse(result?.response?.text()).tripDetails);
            console.log(`final formData:`,JSON.parse(sessionStorage.getItem('formData')));
        
            sessionStorage.setItem('formData', formData);
            sessionStorage.setItem('tripDetails', result?.response?.text());
            console.log(JSON.parse(result?.response?.text()))
            setTripPlanned("planned")

        }


    }


    /**
     * method to get user info based on user access token
     */
    const getUserProfile = (tokenInfo) => {
        console.log(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`);
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'Application/json'
            }
        }).then((resp) => {
            localStorage.setItem('user', JSON.stringify(resp.data));

            setDialog(false);
            console.log("response:\n");

            console.log(resp);
        }).catch((err) => {
            console.error("error:\n");
            console.error(err);
        });
    }

    useEffect(() => {
        if (tripPlanned == 'planning') {
            console.log("trip is being planned by genie");
        }
        else if (tripPlanned == 'planned') {
            console.log("trip has been planned by genie");
        }
    }), [tripPlanned]

    useEffect(() => {
        // console.log(formData);

    }, [formData])

    useEffect(() => {

        console.log(`open dialog value: ${openDialog}`);
    }, [openDialog])

    return (
        <div className='sm:px-10 md:px-32 lg:px-44 xl:px-56 2xl:px-56 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>
                Tell us your travel preferences  🛫
            </h2>
            <p className='mt-3 text-gray-600 text-xl'>
                Provide us basic information about your trip and let the AI plan your trip
            </p>
            <div className='mt-10 flex flex-col gap-7'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        Where would you like to go?
                    </h2>

                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_KEY_GOOGLE_PLACES_API}
                        selectProps={{
                            place,
                            onChange: (v) => {
                                setPlace(v);
                                handleInputChange('location', v);
                            },
                        }}
                        className="border-red-500"
                    />



                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        How many days would to like to stay there?</h2>
                    <Input placeholder={'Ex. 3'} type="number" className="focus-visible:ring-1 hover:shadow-md"
                        onChange={(e) => handleInputChange('noOfDays', e.target.value)}
                    />
                </div>
                {/* </div> */}
                <div>
                    <h2 className='text-xl my-3 font-medium'>How much would you like to spend?</h2>
                    <div className="grid grid-cols-3 gap-5">
                        {SelectBudgetOptions.map((item, index) => (
                            <div key={index} className={`select-none p-2 border cursor-pointer rounded-lg hover:shadow-lg
                                ${formData?.budget == item.title && 'shadow-xl ring-1 ring-black'}
                                `}
                                onClick={() => handleInputChange('budget', item.title)}
                            >
                                <h2 className="text-4xl">{item.icon}</h2>
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className="text-sm text-gray-600">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>Who do you plan to go with?</h2>
                    <div className="grid grid-cols-3 gap-5">
                        {SelectTravelsList.map((item, index) => (
                            <div key={index} className={`select-none p-2 border cursor-pointer rounded-lg hover:shadow-lg
                                ${formData?.traveler == item.people && 'shadow-xl ring-1 ring-black'}
                                `}
                                onClick={() => handleInputChange('traveler', item.people)}
                            >
                                <h2 className="text-4xl">{item.icon}</h2>
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className="text-sm text-gray-600">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center my-10">
                    <Button onClick={onGenerateTrip}>
                        Plan My trip
                    </Button>
                </div>
            </div>


            <Dialog open={openDialog} onOpenChange={setDialog}>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="font-bold text-lg">Sign In With Google</DialogTitle>
                        <DialogDescription>
                            Sign in to the App with Google Authentication Securely to view your plan
                            <Button className="w-full mt-5 flex gap-3 items-center" onClick={login}>
                                <FcGoogle className="w-7 h-7" />
                                Sign In With Google
                            </Button>
                        </DialogDescription>
                    </DialogHeader>


                </DialogContent>
            </Dialog>


        </div>
    )
}

export default CreateTrip
