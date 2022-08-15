import "./css.css"
import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return(
        <div>
        <h2 className="the"> The Knowledge Hunt</h2>
        <h1 className="blog">
            <span>-</span> Blog <span>-</span>
        </h1>
        <p className="daily">
            Your Daily Dose of <br/> Awesome  & Productive Updates.
        </p>
        <nav>
            <b><Link to="/" className="home">Home</Link>
            <Link to="/tourism" className="Tourism">Tourism</Link>
            <Link to="/fitness" className="Tourism">Fitness</Link>
            <Link to="/technology" className="Tourism">Technology</Link>
            <Link to="/bollywood" className="Tourism">Bollywood</Link>
            <Link to="/food" className="Tourism">Food</Link></b>   
        </nav> <br/><br />
        <hr className="hr"></hr>    
        </div>
    )
}

export default Nav;