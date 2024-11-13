// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_KEY_GEMINI_API;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json", 
};

// async function run() {
    export const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format." },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "```json\n{\n  \"tripDetails\": {\n    \"destination\": \"Las Vegas\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"From $30/night (prices vary)\", \n      \"hotelImageUrl\": \"https://www.excalibur.com/content/dam/excalibur/images/hero/Excalibur-Hero.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0993,\n        \"longitude\": -115.1715\n      },\n      \"rating\": 3.5,\n      \"description\": \"Castle-themed hotel with affordable rooms, multiple dining options, and a lively casino.\"\n    },\n    {\n      \"hotelName\": \"Luxor Hotel & Casino\",\n      \"hotelAddress\": \"3900 S Las Vegas Blvd, Las Vegas, NV 89119\",\n      \"price\": \"From $40/night (prices vary)\",\n      \"hotelImageUrl\": \"https://www.luxor.com/content/dam/luxor/images/hero/Luxor_Hero.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0954,\n        \"longitude\": -115.1762\n      },\n      \"rating\": 3.5,\n      \"description\": \"Pyramid-shaped hotel with unique architecture, a variety of entertainment options, and budget-friendly rooms.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",      \n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"From $35/night (prices vary)\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/-/media/circus-circus/property/carousel/circuscircuscarousel1.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1228,\n        \"longitude\": -115.1685\n      },\n      \"rating\": 3.0,\n      \"description\": \"Family-friendly hotel with a circus theme, affordable rooms, and an Adventuredome indoor theme park.\"\n    }\n  ],\n\n\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"bestTimeToVisit\": \"Morning/Afternoon\",\n      \"plan\": [\n        {\n          \"placeName\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"placeDetails\": \"Iconic welcome sign for a photo opportunity.\",\n          \"placeImageUrl\": \"https://www.lasvegashowto.com/wp-content/uploads/2020/09/welcome-to-las-vegas-sign.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0884,\n            \"longitude\": -115.1748\n          },\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"30 minutes\"\n        },\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Pedestrian mall with a light show and live entertainment.\",\n          \"placeImageUrl\": \"https://i0.wp.com/vegasexperience.com/wp-content/uploads/2018/09/viva-vision-freemont-street-experience-1.jpg?fit=2000%2C1125&ssl=1\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1698,\n            \"longitude\": -115.1407\n          },\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"1 hour (including travel time from Welcome Sign)\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"bestTimeToVisit\": \"Afternoon/Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"Open-air shopping and dining district with the High Roller observation wheel.\",\n          \"placeImageUrl\": \"https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/lasvegas/LINQ-Promenade-Day-2724e8845056a36_2724e926-5056-a36a-07c563126b893db7.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1166,\n            \"longitude\": -115.1717\n          },\n          \"ticketPricing\": \"High Roller: From $30\",\n          \"timeToTravel\": \"1-2 hours\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Stunning floral displays that change seasonally.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/property/gardens/conservatory-botanical-garden/spring/Bellagio-Conservatory-Spring-Hero.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1131,\n            \"longitude\": -115.1761\n          },\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"30 minutes (including travel time from The LINQ)\"\n        },\n        {\n          \"placeName\": \"Fountains of Bellagio\",\n          \"placeDetails\": \"Free choreographed water show set to music.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/property/fountains/Fountains-of-Bellagio.jpg\",\n          \"geoCoordinates\": {\n             \"latitude\": 36.1131,\n            \"longitude\": -115.1761\n          },\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"Same location as Bellagio Conservatory\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"bestTimeToVisit\": \"Daytime\",\n      \"plan\": [\n        {\n          \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"Colorful public art installation south of Las Vegas.\",\n          \"placeImageUrl\": \"https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/seven-magic-mountains_0.jpg?itok=-_uCm78o\",\n          \"geoCoordinates\": {\n            \"latitude\": 35.9936,\n            \"longitude\": -115.1718\n          },\n          \"ticketPricing\": \"Free (parking fee may apply)\",\n          \"timeToTravel\": \"30 minutes (driving from the Strip)\"\n        }, {\n          \"placeName\": \"Arts District\",\n          \"placeDetails\": \"Explore vibrant street art, galleries, and unique shops.\",\n          \"placeImageUrl\": \"https://www.reviewjournal.com/wp-content/uploads/2019/12/122618_artsdistrict_007.jpg?crop=1\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1705,\n            \"longitude\": -115.1411\n          },\n          \"ticketPricing\": \"Free (costs may apply for individual galleries/shops)\",\n          \"timeToTravel\": \"30-45 minutes (driving from Seven Magic Mountains)\"\n\n        }\n\n      ]\n    }\n  ]\n}\n```\n\n\n**Important Notes:**\n\n* **Hotel Prices:** Hotel prices in Las Vegas fluctuate significantly based on the season, day of the week, and demand. The prices provided are estimated starting points and should be verified when booking.  Resort fees are also common in Las Vegas hotels and are not usually included in the advertised price.\n* **Ticket Pricing:**  Attraction prices can also vary. Always check the official websites for the most up-to-date information.\n* **Travel Times:**  Travel times are estimates and can change due to traffic.  Consider using ride-sharing services or public transport within Las Vegas, especially on the Strip, to avoid parking fees and traffic.\n* **Food Budget:** Factor in a daily food budget. You can find affordable meals at fast food places, buffets (check for deals), and some happy hour specials.\n* **Free Activities:**  Take advantage of free attractions like the Bellagio Conservatory & Botanical Garden, the Fountains of Bellagio, walking the Strip, and exploring the themed hotels.  \n* **Alternative Budget Hotels:**  Consider downtown Las Vegas hotels (like the Golden Nugget or the Downtown Grand) for potentially lower prices than the Strip.\n* **Customize:** This is a suggested itinerary, feel free to adjust it to your interests and preferences.\n\n\n\n\n\n\n" },
                ],
            },
        ],
    });

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
// }

// run();