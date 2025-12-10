import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../images/2018logo4.png';

export class NavBar extends React.Component {

  render() {
    return (
      <nav className='navbar-header'>
        <nav class='nav'>
          <input type='checkbox' id='nav-check' />
          <div className='nav-btn'>
            <label for='nav-check'>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
          <div className='nav-wrapper'>
            <div className='nav-title'>
              <Link to={'/'}>
                <a href='#'><img src={logo} className='navbar-logo' /></a>
              </Link>
            </div>
            <ul class='nav-list'>
              <li><Link to={'/'}><a href='/'>Home</a></Link></li>
              <li><Link to={'/games'}><a href='/'>Games</a></Link></li>
              <li><Link to={'/prototypes'}><a href='#'>Prototypes</a></Link></li>
              <li><Link to={'/'}><a href='#'>Other</a></Link></li>
            </ul>
          </div>
        </nav>
      </nav>
    );
  }
}

export default NavBar;
