import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = () =>{

    const [restInfo, setRestInfo] = useState(null);

    const {resId} = useParams();

    console.log(resId)

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        setRestInfo(json.data);
    };

    if(restInfo === null) return <Shimmer/>

    // console.log(restInfo)
    const {name, city,areaName} = restInfo?.cards[0]?.card?.card?.info;
    console.log(restInfo?.cards[0]?.card?.card?.info)
    const  itemcards  = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(itemcards)
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{city} :  {areaName}</h3>
            <h1>Menu</h1>
            <ul>
               {itemcards ? itemcards.map(item =>
                <li key={item.card.info.id}>{item.card.info.name} -{"Rs."} {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>
            ): <Error/>}
            </ul>
        </div>
    )
    
}

export default RestaurantMenu;