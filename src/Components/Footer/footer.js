import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import "../css/footer.css";


export default function Footer(){

    const footerBottle = require('./bottle.png') 
    const footerBox = require('./Layer 1.png') 
    const footerGearRed = require('./Vector (3).png') 
    const footerGearYellow = require('./Vector (4).png') 
    const arrow = require('./Rectangle 45.png') 
    
    return(
    <div className="content">
        <div className="left">
            <div className="circle"></div>
            <img className="footerBottle" src={footerBottle}/>
            <h5>Customers</h5>
            <span>See our portfolio</span><img className="arrow" src={arrow}/>
        </div>
        <div className="middle">
        <div className="circle"></div>
            <img className="footerBox" src={footerBox}/>
            <h5>Suppliers</h5>
            <span>Work with us</span><img className="arrow" src={arrow}/>
        </div>
        <div className="right">
        <div className="circle"></div>
            <img className="footerGearRed" src={footerGearRed}/>
            <img className="footerGearYellow" src={footerGearYellow}/>
            <img className="footerGearRed_sm" src={footerGearRed}/>
            <h5>Team</h5>
            <span>Sign in or apply</span><img className="arrow" src={arrow}/>
        </div>
    </div>
    )
}   
