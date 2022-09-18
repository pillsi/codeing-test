import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import "../css/content.css";


export default function Content(){

    const contentImg = require('./content.png') 
    
    return(
    <div className="content-top">
        <div className="left">
            <div className="square"></div>
            <img className="contentImg" src={contentImg}/>
        </div>
        <div className="right">
            <h2>Knowing the numbers is never enough.</h2>
            <p>It's about understanding the opportunities and challenges behind the numbers — and planning for a stronger future. What's the right product selection for your customers? Which tools and information could make your business even more successful? At Southern Glazer's, we tailor our services for each and every one of our customers. Because we know that when we come together, there's always something to celebrate.</p>
        </div>
    </div>
    )
}   
