import React from 'react'
import titleLogo from './GoosedumpTitle.png';
import logo from './2018logo4.png';
import gameLogo from './GamesTitle.png';

export class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav">
          <img src={titleLogo} class="nav-title" />
          <a href="#"> <img src={logo} class="nav-logo" /></a>
          <img src={gameLogo} class="nav-title" />
        </div>
      </div>
    );
  }
}

export default NavBar;
