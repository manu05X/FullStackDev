import ResturantCards from "./ResturantCards";
import { restaurantList } from "../utils/mockData";


// const Body = () => {
//     return(
//         <div className="body">
//             <div className="Search">Search</div>
//             <div className="resturant-Container">
//                 <ResturantCards/>
                
//             </div>
            
//         </div>
//     )
// }

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="resturant-Container">
                {restaurantList.map((restaurantData, index) => (
                    <ResturantCards key={index} resData={restaurantData.info} />
                ))}
            </div>
        </div>
    );
};


export default Body