import React from 'react';
import { useParams } from 'react-router-dom';
import { GameList } from '../components/GameList';

const GamePage = () => {
  const { id } = useParams();
  const game = GameList.find(game => game.id === id);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h1>{game.gameTitle}</h1>
      <p>{game.gameDesc}</p>
      <img src={game.image} alt={game.gameTitle} />
    </div>
  );
};

export default GamePage;