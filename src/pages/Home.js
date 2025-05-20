import React from 'react'
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/games/`} style={{ textDecoration: 'none' }}>
          <button>
          Klikk
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
