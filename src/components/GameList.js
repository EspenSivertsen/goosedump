import pissoff from '../images/game-pissoff.png';
import turnbasedsports from '../images/game-main-turnbasedsports.png';
import turnbasedsportsHover from '../images/game-turnbasedsports.jpg';
import cupyourball from '../images/game-cupyourball.jpg';
import tetrisshooter from '../images/game-tetrisshooter.png';
import toppblokk from '../images/game-toppblokk.png';
import aktaer from '../images/game-aktaer.png';
import rude8ball from '../images/game-rude8ball.png';
import pc from '../images/download.png';
import android from '../images/google-play-badge.png';

export const GameList = [
  {
    id: 'piss-off',
    gameTitle: 'Piss Off!',
    gameDesc: 'Have a piss, or piss off!',
    gamePlatform: android,
    category: 'Android',
    image: pissoff,
    imageHover: turnbasedsports,
    icon: ['fab', 'android'],
    iconStyle: 'brand-android',
    gameUrl: 'https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.PissOff',
  },
  {
    id: 'turn-based-sports',
    gameTitle: 'Turn Based Sports',
    gameDesc: 'Take turn to try and score.',
    gamePlatform: android,
    category: 'Android',
    image: turnbasedsports,
    imageHover: turnbasedsportsHover,
    icon: ['fab', 'android'],
    iconStyle: 'brand-android',
    gameUrl: 'https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.TurnBasedSports',
  },
  {
    id: 'cup-your-ball',
    gameTitle: 'Cup Your Ball',
    gameDesc: 'Grab your ball and swipe it up in the cup.',
    gamePlatform: android,
    category: 'Android',
    image: cupyourball,
    imageHover: turnbasedsports,
    icon: ['fab', 'android'],
    iconStyle: 'brand-android',
    gameUrl: 'https://play.google.com/store/apps/details?id=com.Espen.CupYourBall',
  },
  {
    id: 'rude-8-ball',
    gameTitle: 'Rude 8-Ball',
    gameDesc: 'The not so magic 8-ball that is also rude.',
    gamePlatform: android,
    category: 'Android',
    image: rude8ball,
    imageHover: turnbasedsports,
    icon: ['fab', 'android'],
    iconStyle: 'brand-android',
    gameUrl: 'https://play.google.com/store/apps/details?id=com.GoosedumpSivertsen.rude8ball',
  },
  {
    id: 'topp-blokk',
    gameTitle: 'Topp Blokk',
    gameDesc: 'A tetromino climbing game.',
    gamePlatform: pc,
    category: 'Windows',
    image: toppblokk,
    imageHover: turnbasedsports,
    icon: ['fab', 'windows'],
    iconStyle: 'brand-windows',
    gameUrl: 'https://www.dropbox.com/s/1erq64cqop1991l/Topp%20Blokk.zip?dl=0',
  },
  {
    id: 'akta-er',
    gameTitle: 'Akta Er',
    gameDesc: 'A tribute to Achtung Die Kurve.',
    gamePlatform: pc,
    category: 'Windows',
    image: aktaer,
    imageHover: turnbasedsports,
    icon: ['fab', 'windows'],
    iconStyle: 'brand-windows',
    gameUrl: 'https://www.dropbox.com/s/pwr9eh7zp3oqxdd/AktaEr.zip?dl=0',
  },
  {
    id: 'tetris-shooter',
    gameTitle: 'Tetris Shooter',
    gameDesc: 'The tetrominos have gone rogue, take out the other before he takes you out.',
    gamePlatform: pc,
    category: 'Windows',
    image: tetrisshooter,
    imageHover: turnbasedsports,
    icon: ['fab', 'windows'],
    iconStyle: 'brand-windows',
    gameUrl: 'https://www.dropbox.com/s/1fkjzok4fgxe0qe/TetrisShooter.zip?dl=0',
  },
];
