import React from 'react'
import Games from './Games';

import noImage from './noimage.jpg';
import tetrisshooter from './tetrisshooter.png';
import toppblokk from './toppblokk.png';
import aktaer from './aktaer.png';
import pc from './download.png';

const android = "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>My Games</h1>
        <div className="game-row">
        <Games
          gameTitle = {"Topp Blokk"}
          gameDesc = {"A tetromino climbing game."}
          gamePlatform = {pc}
          image = {noImage}
          gameUrl = {"https://www.dropbox.com/s/1erq64cqop1991l/Topp%20Blokk.zip?dl=0"}
        />
        <Games
          gameTitle = {"Cup Your Ball"}
          gameDesc = {"Grab your ball and swipe it up in the cup."}
          gamePlatform = {android}
          image = {noImage}
          gameUrl = {"https://play.google.com/store/apps/details?id=com.Espen.CupYourBall"}
        />
        <Games
          gameTitle = {"Piss Off!"}
          gameDesc = {"Have a piss, or piss off!"}
          gamePlatform = {android}
          image = {noImage}
          gameUrl = {"https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.PissOff"}
        />
        <Games
          gameTitle = {"Akta Er"}
          gameDesc = {"A tribute to Achtung Die Kurve."}
          gamePlatform = {pc}
          image = {noImage}
          gameUrl = {"https://www.dropbox.com/s/pwr9eh7zp3oqxdd/AktaEr.zip?dl=0"}
        />
        <Games
          gameTitle = {"Rude 8-Ball"}
          gameDesc = {"The not so magic 8-ball that is also rude."}
          gamePlatform = {android}
          image = {noImage}
          gameUrl = {"https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.rude8ball"}
        />
        <Games
          gameTitle = {"Turn Based Sports"}
          gameDesc = {"Take turn to try and score."}
          gamePlatform = {android}
          image = {noImage}
          gameUrl = {"https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.TurnBasedSports"}
        />
        <Games
          gameTitle = {"Tetris Shooter"}
          gameDesc = {"The tetrominos have gone rogue, take out the other before he takes you out."}
          gamePlatform = {pc}
          image = {noImage}
          gameUrl = {"https://www.dropbox.com/s/1fkjzok4fgxe0qe/TetrisShooter.zip?dl=0"}
        />
        </div>
      </div>
    );
  }
}

export default Home;
