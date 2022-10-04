import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';

function Games(props) {

  const [open, openModal] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleModal = () => {
    openModal(!open)
  };

  return (
    /**<div className="games">
      <div class="game-box">
        <div class="game-feature">
          {<img src={this.props.image} class="poster" height="150px" />}
        </div>
        <div class="game-info">
          <h2>{this.props.gameTitle}</h2>
          <p>{this.props.gameDesc}</p>
          <a href={this.props.gameUrl}>
            <img alt='Game Platform' src={this.props.gamePlatform} height='50px' />
          </a>
        </div>
      </div>
    </div>**/
    <div id="games">
      <div className="game">
          <div className="game-box">
            <div className="game-feature">
              <h2>{props.gameTitle}</h2>
              {<img src={props.image} className="poster" height="150px" onClick={toggleModal}/>}
            </div>
          </div>
        </div>
        <Modal open={open} onClose={toggleModal} center>
          <h2>Simple centered modal</h2>
          <div className="game-info">
              <h2>{props.gameTitle}</h2>
              <p>{props.gameDesc}</p>
            </div>
          <div className="game-footer">
            <a href={props.gameUrl}>
              <img alt='Game Platform' src={props.gamePlatform} height='50px' />
            </a>
            <button onClick={() => setLiked(!liked)}>
              {liked ? "Liked" : "Like"}
            </button>
          </div>
        </Modal>      
    </div>
  );
}

export default Games;