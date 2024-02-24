import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/data";


const Body = () => {
    return (
        <div className="body">
            <input type="text" className="input1" />
            <div className="search">Search</div>
            <div className="res-container">
            {
                resArr.map((resaurant)=> (
                    <RestaurantCard key={resaurant.info.id} resData={resaurant} />
                ))
            }
             </div>
            
        </div>
    )
};

export default Body;