import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'



function Title() {
    return (
        <div className="Title">
            <header>
                <h1>SFPOPOS</h1>
                <div className="Title-Subtitle"> (San Francisco's Privately Owned Public Spaces)</div>
                <div className="Nav">
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/">List</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                        to="/about">About</NavLink>
                </div>
            </header>
        </div>
    )
}

export default Title