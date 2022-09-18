import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import "../css/navbar.css";
export default function Navbar(){


    const logoImg = require('./Group 2.png')
    const navigate = useNavigate();

    const goPage = (path) => {
        navigate(path);
    }

    const menus = [
        {
        title: 'Home',
        path: '/about'},
        {
        title: 'Our Portfolio',
        path: '/about'},
        {
        title: 'Suppliers',
        path: '/about'},
        {
        title: 'Careers',
        path: '/about'},
        {
        title: 'Our Causes',
        path: '/about'},
        {
        title: 'News',
        path: '/about'},
        {
        title: 'About Us',
        path: '/about'},
    ]

    return (
    <div className="container">
        <div className="nav">
                <div className="left"><img src={logoImg} style={{height:"85px"}} /></div>
                <div className="top">
                    <div className="social">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                    </div>
                    <div className="login">
                        <i class="bi bi-chevron-down"></i>
                        <span>Log ln</span>
                    </div>
                </div>

            <div className="list">
            <ul>
                {menus.map((item)=>(
                    <li onClick={() => goPage(item.path)} key={item.path}>{item.title}</li>
                ))}
            </ul>
            </div>
        </div>


    </div>
    )
}