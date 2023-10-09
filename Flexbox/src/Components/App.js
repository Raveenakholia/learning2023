import React from "react";
import ReactDOM  from "react-dom/client";
import FlexBox from "./FlexBox/FlexBox";

export default function App (){
    return(
        <div id="root">
            <FlexBox/>
            <h1>hello</h1>
        </div>
    
    )
}

const Applayout = ReactDOM.createRoot(document.getElementById("roor"))


Applayout.render(<App/>)