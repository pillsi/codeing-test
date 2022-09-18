import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import "../css/banner.css";


export default function Banner(){

    const bannerImg_middle = require('./image-a 1.png') 
    const bannerImg_top = require('./image-b 1.png') 
    const bannerImg_right = require('./Ellipse 3.png')
    const bannerImg_circle = require('./Vector (1).png')
    // const bannerBg = require('./Group 1.png')
    

    return(
    <div className="banner">
        {/* <img src={bannerBg}/> */}
        <div className="left">
            <h1>To bringing people together.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button>PORTFOLIO</button>
    </div>
        <div className="right">
            <div className="square"></div>
            <img className="middle" src={bannerImg_middle}/>
            <img className="top" src={bannerImg_top}/>
            <img className="right" src={bannerImg_right}/>
            <img className="circle" src={bannerImg_circle}/>
        </div>
    </div>
    )
}   
