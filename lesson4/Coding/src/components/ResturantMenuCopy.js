import { useEffect, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CONST_URL } from "../utils/constants";


const ResturantMenu = () => {


    const [resturantInfo, setResturantInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.971556273089208&lng=77.70252227783203&restaurantId=445762&catalog_qa=undefined&submitAction=ENTER

    const fetchMenu = async () => {
        try{
            const menuData = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.971556273089208&lng=77.70252227783203&restaurantId=445762&catalog_qa=undefined&submitAction=ENTER"
            );

            const json = await menuData.json();

            // console.log(json.data.cards[4].cards[1].card.card.itemCards.card.info);
            //console.log(json.data.cards[4])
            //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
            // const resturantInfo = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
            //const resturantInfo = json.data.cards;
            setResturantInfo(json.data.cards);
            console.log("Fetching resturant Done");
            

            // const name = json.data.cards[0].card.card.text;
            // const cuisine = json.data.cards[2].card.card.info.cuisines;
            // const img =  json.data.cards[2].card.card.info.cloudinaryImageId;
            // const costForTwo = json.data.cards[2].card.card.info.costForTwoMessage;

            // console.log(name);
            // console.log(cuisine);
            //console.log(resturantInfo[2]);

        } catch(err){
            console.log(err);
        }
    };
    console.log(resturantInfo)
    

    //const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resturantInfo[2].card.card.info;

    return resturantInfo===null?(
    <Shimmer/>
        ):(
        <div className="menu">
            {/* <div className="">
                <img 
                    className="res-logo"
                    alt="res-logo" 
                    src={CONST_URL + cloudinaryImageId}
                />

            </div> */}
            {/* <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3> */}
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>KFC</li>
                <li>Pizza Hut</li>
                <li>NagaArjuna</li>
            </ul>

        </div>
    );
};

export default ResturantMenu;