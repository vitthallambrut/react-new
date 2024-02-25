import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/data";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";




//normal js variable
// const resArr = []

const Body = () => {
    //local state variable
    let [restaurantsList, setList] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]); // it acceept two arguments first one is callback function and second one is dependency array
    // console.log(setList(restaurantsList))

     const fetchData = async () => {
        
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.length)
        if(json){
            setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }else{
            return <Shimmer/>
        }
        
        
    }

    if(restaurantsList == 0){
        return <Shimmer/>
    }

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