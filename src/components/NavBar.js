import React from 'react'

export class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav">
          <img src="/img/GoosedumpTitle.png" class="nav-title" />
          <a href="#"><img src="/img/2018logo4.png" class="nav-logo" /></a>
          <img src="/img/GamesTitle.png" class="nav-title" />
        </div>
      </div>
    );
  }
}

export default NavBar;
