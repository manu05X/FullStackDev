import { useEffect, useState } from "react";
import { CONST_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const ResturantMenu = () => {
    const [resturantInfo, setResturantInfo] = useState(null);

    const {resId} = useParams();
    //console.log(params);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const menuData = await fetch( MENU_API + resId );
                //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.971556273089208&lng=77.70252227783203&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    

            const json = await menuData.json();
            const restaurantData = json.data.cards;
            setResturantInfo(restaurantData);
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
                {itemCards && itemCards.map(item => <li 
                    key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {(item?.card?.info?.price)/100 || (item?.card?.info?.defaultprice)/100}
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
