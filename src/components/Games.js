import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Games.css';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Games(props) {

  const [open, openModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleModal = () => {
    openModal(!open)
  };

  return (
      <div id='games'>
        <Link to={`/game/${props.id}`} style={{ textDecoration: 'none' }}>
        
        {/* <div className='game-container' onClick={toggleModal}> */}
        <div className='game-container'>
          <div className='img-container'
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{ position: 'relative', width: '100%', height: '18em' }}
          >
              <img
                src={props.image}
                alt='normal'
                className='poster'
                style={{
                  position: 'absolute',
                  opacity: isHovered ? 0 : 1,
                }}
              />
              <img
                src={props.imageHover}
                alt='hover'
                className='poster'
                style={{
                  position: 'absolute',
                  opacity: isHovered ? 1 : 0,
                }}
              />
            <div className='icon-container'>
              <FontAwesomeIcon className={props.iconStyle} icon={props.icon} />
              {/* <FontAwesomeIcon className="brand-windows" icon={['fab', 'windows']} /> */}
            </div>
          </div>
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
            {/* <p>Category: {props.category}</p> */}
            <p className='modal-game-description'> {props.gameDesc} </p>
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
        </Link>   
    </div>
  );
}

export default Games;