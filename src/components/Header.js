import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import titleLogo from '../images/GoosedumpTitle.png';
import logo from '../images/2018logo4.png';
import logo_light from '../images/gooselogo_lighter.png';
import gameLogo from '../images/GamesTitle.png';

export class Header extends React.Component {

  render() {
    return (
      <section id='header'>
        <Link to={'/'}>
          <div className='header'>
            <h1 className='header-title'>goosedump</h1>
            {/* <img src={titleLogo} className='header-title' /> */}
            {/* <img src={logo_light} className='header-logo' /> */}
          </div>
        </Link>
      </section>
    );
  }
}

export default Header;