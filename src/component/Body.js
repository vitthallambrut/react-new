import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/data";
import { useState } from "react";




//normal js variable
// const resArr = []

const Body = () => {
    //local state variable
    let [restaurantsList, setList] = useState(resArr)
    // console.log(setList(restaurantsList))
    return (
        <div className="body">
            <div className="search">
                <button onClick={()=>{
                    
                  const filteredlist = restaurantsList.filter(
                    (res)=> res.info.avgRating > 4
                  );
                //   console.log(filteredlist) 
                  setList(filteredlist);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
                
                restaurantsList.map((resaurant)=> (
                    <RestaurantCard key={resaurant.info.id} resData={resaurant} />
                ))
            }
             </div>
            
        </div>
    )
};

export default Body;