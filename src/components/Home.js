import React from 'react'
import Games from './Games';
import { GameList } from './GameList';
import FilterList from './FilterList';

// import noImage from '../images/noimage.jpg';
// import tetrisshooter from '../images/game-tetrisshooter.png';
// import toppblokk from '../images/game-toppblokk.png';
// import aktaer from '../images/game-aktaer.png';
// import cupyourball from '../images/game-cupyourball.jpg';
// import pissoff from '../images/game-pissoff.png';
// import turnbasedsportsMain from '../images/game-main-turnbasedsports.png';
// import turnbasedsports from '../images/game-turnbasedsports.jpg';
// import rude8ball from '../images/game-rude8ball.png';
// import pc from '../images/download.png';
// import android from '../images/google-play-badge.png';
//const android = "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="game-header">My Games</h1>
        <section className="grid">

          {GameList.map((game, index) => (
            <div
              key={game.id}
              className={`game-container ${index === 0 ? 'full-width' : 'grid-item'}`}
            >
              <Games
                id={game.id}
                gameTitle={game.gameTitle}
                gameDesc={game.gameDesc}
                gamePlatform={game.gamePlatform}
                category={game.category}
                image={game.image}
                imageHover={game.imageHover}
                icon={game.icon}
                iconStyle={game.iconStyle}
                gameUrl={game.gameUrl}
              />
            </div>
          ))}
              
        </section>

        </div>
    );
  }
}

export default Home;
