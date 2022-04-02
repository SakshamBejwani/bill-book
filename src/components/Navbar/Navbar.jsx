import React from 'react'
import { useState } from "react";
// import { NavLink } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
            <div class="App-logo">
                {/* <NavLink exact to="/" className="nav-logo"> */}
                <img src='mbb_logo.svg' alt="logo" />
                {/* </NavLink> */}
            </div>
          
            <div class="nav-links-container">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                    {/* <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                    > */}
                        Why Use My BillBook?
                    {/* </NavLink> */}
                    </li>
                    <li className="nav-item">
                    {/* <NavLink
                        exact
                        to="/Who"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                    > */}
                        Who is it For?
                    {/* </NavLink> */}
                    </li>
                    <li className="nav-item">
                    {/* <NavLink
                        exact
                        to="/Pricing"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                    > */}
                        Pricing
                    {/* </NavLink> */}
                    </li>
                    <li className="nav-item">
                    {/* <NavLink
                        exact
                        to="/Online"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                    > */}
                        Online Store
                    {/* </NavLink> */}
                    </li>
                    <li className="nav-item">
                    {/* <NavLink
                        exact
                        to="/FAQs"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                    > */}
                        FAQs
                    {/* </NavLink> */}
                    </li>
                </ul>
             </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar