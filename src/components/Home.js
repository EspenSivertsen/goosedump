import React from 'react'
import Games from './Games';

const android = "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png";
const pc = "http://placehold.jp/130x50.png"

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>My Games</h3>
        <div className="game-row">
        <Games
          gameTitle = {"Tetris Shooter"}
          gameDesc = {"The tetrominos have gone rogue, take out the other before he takes you out."}
          gamePlatform = {pc}
          image = {"/img/noimage.jpg"}
        />
        <Games
          gameTitle = {"Block to Top"}
          gameDesc = {"A tetromino climbing game."}
          gamePlatform = {pc}
          image = {"/img/noimage.jpg"}
        />
        <Games
          gameTitle = {"Cup Your Ball"}
          gameDesc = {"Grab your ball and swipe it up in the cup."}
          gamePlatform = {android}
          image = {"/img/noimage.jpg"}
        />
        <Games
          gameTitle = {"Akta Er"}
          gameDesc = {"A tribute to Achtung Die Kurve."}
          gamePlatform = {pc}
          image = {"/img/noimage.jpg"}
        />
        <Games
          gameTitle = {"Rude 8-Ball"}
          gameDesc = {"The not so magic 8-ball that is also rude."}
          gamePlatform = {android}
          image = {"/img/noimage.jpg"}
        />
        <Games
          gameTitle = {"Turn Based Sports"}
          gameDesc = {"Take turn to try and score."}
          gamePlatform = {android}
          image = {"/img/noimage.jpg"}
        />
        </div>
      </div>
    );
  }
}

export default Home;
