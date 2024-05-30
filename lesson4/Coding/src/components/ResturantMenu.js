import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CONST_URL } from "../utils/constants";


const ResturantMenu = () => {
    const [resturantInfo, setResturantInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const menuData = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.971556273089208&lng=77.70252227783203&restaurantId=445762&catalog_qa=undefined&submitAction=ENTER"
            );

            const json = await menuData.json();
            setResturantInfo(json.data.cards);
            console.log("Fetching resturant Done");
        } catch (err) {
            console.log(err);
        }
    };

    if (!resturantInfo) {
        return <Shimmer />;
    }

    // Make sure to safely access nested properties to avoid runtime errors
    const restaurantDetails = resturantInfo?.[2]?.card?.card?.info;
    const {itemCards} = resturantInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    if (!restaurantDetails) {
        return <div>Restaurant details not available</div>;
    }

    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = restaurantDetails;

    return (
        <div className="menu">
            <div className="res-logo-container">
                <img 
                    className="res-logo-menu"
                    alt="res-logo"
                    src={`${CONST_URL}${cloudinaryImageId}`}
                />
            </div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li 
                    key={item.card.info.id}>
                        {item.card.info.name} - {(item.card.info.price)/100 || (item.card.info.defaultprice)/100}
                    </li>)}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li> */}
            </ul>
            {/* <style jsx>{`
                .res-logo-menu {
                    border-radius: 16px;
                    width: 20%;
                    height: auto;
                }
            `}
            </style> */}
        </div>
    );
};

export default ResturantMenu;
