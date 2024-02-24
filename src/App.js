import React from "react";
import ReactDOM from "react-dom/client";
import Header from './component/Header'
import Body from "./component/Body";

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
            <Body/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);