import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";




//normal js variable
// const resArr = []

const Body = () => {
    //local state variable
    let [restaurantsList, setList] = useState([]);

    let [filtereddata, setfiltereddata] = useState([])

    let [searchText, setSearchText] = useState("");

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
            setfiltereddata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }else{
            return <Shimmer/>
        }
        
        
    }
    //conditional rendering
    return restaurantsList == 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button onClick={()=>{
                        //filter the cards and update the UI
                        //need search text
                        // setSearchText(searchText)
                        console.log(searchText)
                        let filterRes = restaurantsList.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        });
                        setfiltereddata(filterRes);
                    }}>Search</button>
                </div>
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
                filtereddata.map((resaurant)=> (
                    <Link key={resaurant.info.id} to={"/restaurant/"+resaurant.info.id}><RestaurantCard resData={resaurant} /></Link>
                ))
            }
             </div>
        </div>
    )
};

export default Body;