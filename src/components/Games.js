import React, { useState } from 'react'
import './Games.css';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';

function Games(props) {

  const [open, openModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleModal = () => {
    openModal(!open)
  };

//   const handClick = e => {
//     const currTarget = e.currentTarget;   
//     // disable all 
//     document.querySelectorAll('.game').forEach( div => 
//     div.classList.remove('game-expanded'))
//     currTarget.classList.add('game-expanded');  
// }

  return (
    /**<div className='games'>
      <div class='game-box'>
        <div class='game-feature'>
          {<img src={this.props.image} class='poster' height='150px' />}
        </div>
        <div class='game-info'>
          <h2>{this.props.gameTitle}</h2>
          <p>{this.props.gameDesc}</p>
          <a href={this.props.gameUrl}>
            <img alt='Game Platform' src={this.props.gamePlatform} height='50px' />
          </a>
        </div>
      </div>
    </div>**/
    // <div id='games' className='game' onClick={handClick}>
      <div id='games'>
        
        <div className='game-container'>
            {<img src={props.image} className='poster' height='150px' onClick={toggleModal}/>}
          <div className='game-feature'>
            <h2 className='game-title'>{props.gameTitle}</h2>
          </div>
        </div>
        
        <Modal classNames={{
          overlay: 'modal-game-overlay',
          modal: 'modal-game',
        }} 
        open={open} 
        onClose={toggleModal} 
        center
        >
        <div className='flex-container'>
          <div className='modal-game-image'> {<img src={props.image} className='modal-poster' height='150px'/>} </div>
          <div className='modal-game-info'>
            <h2>{props.gameTitle}</h2>
            <hr className='modal-game-hr'/>
            <p>Category: {props.category}</p>
            <p className='modal-game-description'>Description: {props.gameDesc}</p>
          </div>
          <div className='modal-game-footer'>
            <hr className='modal-game-hr'/>
            <h3>Available on</h3>
            <a href={props.gameUrl}>
              <img alt='Game Platform' src={props.gamePlatform} height='50px' />
            </a>
            {/* <button onClick={() => setLiked(!liked)}>
              {liked ? 'Liked' : 'Like'}
            </button> */}
          </div>
        </div>
        </Modal>       
    </div>
  );
}

export default Games;