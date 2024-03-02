import { CDN_URL } from "../utils/constant";  // named import

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData.info;
    return (
        <div className="res-card">
            <img className="card-img" src={CDN_URL+cloudinaryImageId} alt="image" />
            <h3 className="title">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRatingString}</h5>
            <h4>{costForTwo}</h4>
        </div>
        
        
        
    )
};

export default RestaurantCard;  //default export