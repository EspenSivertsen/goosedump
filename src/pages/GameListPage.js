import React from 'react'
import Games from '../components/Games';
import { GameList } from '../components/GameList';
import FilterList from '../components/FilterList';

export class GamesPage extends React.Component {
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

export default GamesPage;