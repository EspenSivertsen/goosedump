import React from 'react'
import titleLogo from '../images/GoosedumpTitle.png';
import logo from '../images/2018logo4.png';
import gameLogo from '../images/GamesTitle.png';

export class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav">
          <img src={titleLogo} class="nav-title" />
          <a href="#"> <img src={logo} class="nav-logo" /></a>
          <img src={gameLogo} class="nav-title" />
        </div>
        <div id="navbar" className="nav">
          <div className="nav-list">
            <ul className="nav">
              <a href="#home" className="active-nav"><li>Home</li></a>
              <a href="#about"><li>About</li></a>
              <a href="#projects"><li>Projects</li></a>
              <a href="#games"><li>Games</li></a>
              <a href="#contact"><li>Contact</li></a>
              <a href="javascript:void(0);" className="icon" onclick="responsenav()">&#9776;</a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
