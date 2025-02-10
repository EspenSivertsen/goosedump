import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css";
import titleLogo from '../images/GoosedumpTitle.png';
import logo from '../images/2018logo4.png';
import logo_light from '../images/gooselogo_lighter.png';
import gameLogo from '../images/GamesTitle.png';
import header from '../images/header.png';

export class Header extends React.Component {

  render() {
    return (
      <section id="header">
        <Link to={'/'}>
          <div className="header">
            <img src={header} className="header-title" />
          </div>
        </Link>
      </section>
    );
  }
}

export default Header;
