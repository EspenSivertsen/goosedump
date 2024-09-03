import React, {useState} from 'react'
import "./NavBar.css";
import logo from '../images/2018logo4.png';

export class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar-header">
        {/* {<div id="navbar" className="nav">
          <div className="nav-list">
            <img src={logo} className="header-logo" />
            <ul className="nav">
              <a href="/" className="active-nav"><li>Home</li></a>
              <a href="#games"><li>Games</li></a>
            </ul>
            <button className="hamburger"></button>
          </div>
        </div>} */}

        <nav class="nav">
          <input type="checkbox" id="nav-check" />
          <div class="nav-header">
            <div class="nav-title">
              Logo
            </div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
          <ul class="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </nav>
    );
  }
}

export default NavBar;
