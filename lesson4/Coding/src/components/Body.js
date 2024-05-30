import ResturantCards from "./ResturantCards";
import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    //State Variables
    //Whenever a state variable is updated react will re-render my component
    // const [listOfRestaurants, setListOfResturants] = useState(restaurantList); // getting the mock data from the utils
    const [listOfRestaurants, setListOfResturants] = useState([]);
    //Normal Js Variable
    //let listOfRestaurants;
    //console.log(listOfRestaurants);

    //for FilterRestaurants
    const [filteredResturant, setFilterRestaurants] = useState([]);



    //Search text for restaurant
    const [searchText, setSearchText] = useState("");

    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        console.log("useEffect Called");
        fetchData();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if(isFetching){
            fetchMoreRestaurants();
        }
    }, [isFetching]);

    // Async function to fetch restaurant data from the API
    const fetchData = async () => {
        try {
            // Fetch data from the given URL
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9742534&lng=77.6998941&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                //"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9742534&lng=77.6998941&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            // Parse the JSON response
            const json = await response.json();
            // Extract the list of restaurants from the response
            // const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants; // gwtting the live data
            //Optional chaning
            const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
            // Update the state with the fetched restaurant data
            setListOfResturants(restaurants);
            setFilterRestaurants(restaurants);
        } catch (error) {
            // Log any errors that occur during the fetch operation
            console.error("Failed to fetch data:", error);
        }
    };

    const fetchMoreRestaurants = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    lat: 12.9742534,
                    lng: 77.6998941,
                    page_type: "DESKTOP_WEB_LISTING",
                    page: page+1,
                }),
            });
            const json = await response.json();
            const newResturants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfResturants((prev) => [...prev, ...newResturants]);
            setFilterRestaurants((prev) => [...prev, ...newResturants]);

            setPage(page+1);
            setIsFetching(false);
        } catch (error) {
            console.error("Failed to fetch more data", error);
        }
    };

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop != document.documentElement.offsetHeight || isFetching){
            return;
        }
        setIsFetching(true);
    }

    //Whenever state variables are updated, React triggers a reconciliation cycle(i.e re-renders the component)
    console.log("Body Rendered Call");

    // if(listOfRestaurants.length === 0) { 
    //     //return <h1>Loading.......</h1>
    //     return <Shimmer numCards={10}/>
    //     // Render shimmer cards with a number based on the desired ratio to the number of actual cards
    //     //return <Shimmer numCards={listOfRestaurants.length > 0 ? Math.ceil(listOfRestaurants.length * 0.5) : 4} />;
    // }

    return listOfRestaurants.length === 0 ? (
        <Shimmer numCards={12}/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        //Filter the restaurants cards and update the UI accordingly
                        //serchText
                        //console.log(searchText);
                        const filteredListSearchText = listOfRestaurants.filter(
                            (restaurants) => restaurants.info.name.toLowerCase().includes(searchText)
                        );
                        //console.log(filteredListSearchText);
                        //setListOfResturants(filteredListSearchText);
                        setFilterRestaurants(filteredListSearchText);
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filteredListOfResturants = listOfRestaurants.filter( 
                                (res) => res.info.avgRating > 4.3
                            );
                            // console.log(listOfRestaurants);
                            //setListOfResturants(filteredListOfResturants);
                            setFilterRestaurants(filteredListOfResturants);
                        }}
                    >
                    Top Rated Resturant
                </button>
            </div>
            <div className="resturant-Container">
                {filteredResturant.map((restaurantData, index) => (
                    <ResturantCards key={index} resData={restaurantData.info} />
                ))}
            </div>
        </div>
    );
};


export default Body