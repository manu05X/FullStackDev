import ResturantCards from "./ResturantCards";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    //State Variables
    //Whenever a state variable is updated react will re-render my component
    const [listOfRestaurants, setListOfResturants] = useState(restaurantList);
    //Normal Js Variable
    //let listOfRestaurants;



    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filteredListOfResturants = listOfRestaurants.filter( 
                                (res) => res.info.avgRating > 4.3
                            );
                            // console.log(listOfRestaurants);
                            setListOfResturants(filteredListOfResturants);
                        }}
                    >
                    Top Rated Resturant
                </button>
            </div>
            <div className="resturant-Container">
                {listOfRestaurants.map((restaurantData, index) => (
                    <ResturantCards key={index} resData={restaurantData.info} />
                ))}
            </div>
        </div>
    );
};


export default Body