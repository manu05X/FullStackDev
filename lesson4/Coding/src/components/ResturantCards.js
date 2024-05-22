import { CONST_URL } from "../utils/constants";

const ResturantCards = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        area,
        deliveryTime,
        costForTwoString,
        avgRating,
    } = resData;

    return (
        <div className="resturant-Card">
            <div className="">
                <img 
                    className="res-logo"
                    alt="res-logo" 
                    src={CONST_URL + cloudinaryImageId}
                />

            </div>
            <div>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{area}</h4>
                <h4>{avgRating} Stars </h4>
                <h4>{deliveryTime}</h4>
            </div>
            

        </div>
    )
}


export default ResturantCards;