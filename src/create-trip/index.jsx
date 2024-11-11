import { Input } from "@/components/ui/input"
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function CreateTrip() {

    const [place, setPlace] = useState();
    const [days,setDays] = useState();

    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-20 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>
                Tell us your travel preferences
            </h2>
            <p className='mt-3 text-gray-600 text-xl'>
                Provide us basic information about your trip and let the AI plan your trip
            </p>
            <div className='mt-20 flex flex-col gap-10'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        Where would you like to go?                    </h2>
                    <GooglePlacesAutocomplete 
                        apiKey={import.meta.env.VITE_KEY_GOOGLE_PLACES_API}
                        selectProps={{
                            place,
                            onChange: (v) => {
                                setPlace(v);
                                console.log(v);
                            }
                        }}
                    />

                </div>
                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        How many days would to like to stay there?                    </h2>
                    <Input placeholder = {'Ex. 3'} type="number"
                        selectProps={{
                            days,
                            onChange: (v) => {
                                setDays(v);
                                console.log("hello");
                            }
                        }}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default CreateTrip
