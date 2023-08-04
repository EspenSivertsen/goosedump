import React from 'react'
import Games from './Games';
import FilterList from './FilterList';

import noImage from '../images/noimage.jpg';
import tetrisshooter from '../images/tetrisshooter.png';
import toppblokk from '../images/toppblokk.png';
import aktaer from '../images/aktaer.png';
import pc from '../images/download.png';
import android from '../images/google-play-badge.png';
//const android = "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="game-header">My Games</h1>
        <section class="grid">
          <div className="grid-upper">
            <div className="grid-row">
              <Games
                  gameTitle = {"Piss Off!"}
                  gameDesc = {"Have a piss, or piss off!"}
                  gamePlatform = {android}
                  category = {"Android"}
                  image = {noImage}
                  gameUrl = {"https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.PissOff"}
                />
              </div>
          </div>

          {/* <div className='grid-middle'>
            <div className="grid-row">
              
            </div>
          </div> */}

          <div className='grid-lower'>
            <div className="grid-row">
              <Games
                gameTitle = {"Turn Based Sports"}
                gameDesc = {"Take turn to try and score."}
                gamePlatform = {android}
                category = {"Android"}
                image = {noImage}
                gameUrl = {"https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.TurnBasedSports"}
              />
              <Games
                gameTitle = {"Cup Your Ball"}
                gameDesc = {"Grab your ball and swipe it up in the cup."}
                gamePlatform = {android}
                category = {"Android"}
                image = {noImage}
                gameUrl = {"https://play.google.com/store/apps/details?id=com.Espen.CupYourBall"}
              />
            </div>
            <div className="grid-row">
              <Games
                gameTitle = {"Rude 8-Ball"}
                gameDesc = {"The not so magic 8-ball that is also rude."}
                gamePlatform = {android}
                category = {"Android"}
                image = {noImage}
                gameUrl = {"https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.rude8ball"}
              />
              <Games
                gameTitle = {"Topp Blokk"}
                gameDesc = {"A tetromino climbing game."}
                gamePlatform = {pc}
                category = {"Windows"}
                image = {toppblokk}
                gameUrl = {"https://www.dropbox.com/s/1erq64cqop1991l/Topp%20Blokk.zip?dl=0"}
              />
            </div>

            <div className='grid-row'>
              <Games
                gameTitle = {"Akta Er"}
                gameDesc = {"A tribute to Achtung Die Kurve."}
                gamePlatform = {pc}
                category = {"Windows"}
                image = {noImage}
                gameUrl = {"https://www.dropbox.com/s/pwr9eh7zp3oqxdd/AktaEr.zip?dl=0"}
              />
              <Games
                gameTitle = {"Tetris Shooter"}
                gameDesc = {"The tetrominos have gone rogue, take out the other before he takes you out."}
                gamePlatform = {pc}
                category = {"Windows"}
                image = {noImage}
                gameUrl = {"https://www.dropbox.com/s/1fkjzok4fgxe0qe/TetrisShooter.zip?dl=0"}
              />
            </div>
          </div>
              
        </section>

        </div>
    );
  }
}

export default Home;
