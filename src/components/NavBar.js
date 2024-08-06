import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import titleLogo from '../images/GoosedumpTitle.png';
import logo from '../images/2018logo4.png';
import logo_light from '../images/gooselogo_lighter.png';
import gameLogo from '../images/GamesTitle.png';

export class NavBar extends React.Component {

  render() {
    return (
      <nav>
        <div className="navbar">
          <Link to={'/'}>
            <div className="nav">
              <img src={titleLogo} className="nav-title" />
              <img src={logo_light} className="nav-logo" />
            </div>
          </Link>
          {<div id="navbar" className="nav navbar-header">
            <div className="nav-list">
              <ul className="nav">
                <a href="/" className="active-nav"><li>Home</li></a>
                <a href="#games"><li>Games</li></a>
              </ul>
              <button className="hamburger"></button>
            </div>
          </div>}
          {/* <div id="navbar" className="nav navbar-header">
            <div className="nav-list">
              <ul className="nav">
                <a href="#home" className="active-nav"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#games"><li>Games</li></a>
                <a href="#contact"><li>Contact</li></a>
              </ul>
              <button className="hamburger"></button>
            </div>
          </div> */}
        </div>
      </nav>
    );
  }
}

export default NavBar;
