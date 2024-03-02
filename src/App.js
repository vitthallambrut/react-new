import React from "react";
import ReactDOM from "react-dom/client";
import Header from './component/Header'
import Body from "./component/Body";
import About from './component/About'
import Contactus from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// const heading  = React.createElement("h1",{},"Hello world..! from React");



// const elem = <span>React Element</span>
// React component
// class component - old way 
// functional component - new 

// React functional component - just normal js function which return some jsx element

// const HeadingComponent = () => {
//     return <h1>This is function comaponent.</h1>
// }

// const HeadingComponent1 = () => (
//     <div id="container">
//         <h1 className="heading">This is function comaponent.</h1>
//     </div>
// )  // this same as HeadingComponent , parenthesis for multiline code 


// const title = (
//     <h1 className="head" tabIndex="5">
//         {elem}
//         Namaste React using JSX
//         <HeadingComponent1/>
//     </h1>
// );





const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contactus/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);