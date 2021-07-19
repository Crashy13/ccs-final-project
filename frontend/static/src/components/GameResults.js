import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment'

const GameResults = (props) => {
  return(
    <div>
      <ul>
        {
          props.gameResults.map(game => (
            <li key={game.id}>
              <Link to={{
                pathname: `/game/${game.name}`,
                gameProps: {
                  game: game
                }
              }}>
              <h3>{game.name}</h3>
              <img src={game.background_image} alt="game"/>
              <h3>Released:</h3><Moment className="release-date" format="MM/DD/YYYY">{game.released}</Moment>
              </Link>
            </li>
          ))
        }
      </ul>
      <p>Game data and pictures provided by <a href="https://rawg.io/">RAWG</a></p>
    </div>
  )
}

export default GameResults
