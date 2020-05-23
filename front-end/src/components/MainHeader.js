import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const MainHeader = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="">HOW TO GUIDE</a>
                </div>
                <ul>
                    <li><NavLink to="/">Register/Login</NavLink></li>
                    <li><a href="">About Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;