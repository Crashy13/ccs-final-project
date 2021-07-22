import React from 'react';
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import {Button} from 'react-bootstrap';
import GameReviews from './GameReviews'

const GameResults = (props) => {


  return(
    <div>
      <ul>
        {
          props.gameResults.map(game => (
            <li key={game.id}>
              <h3>{game.name}</h3>
              <img src={game.background_image} alt="game"/>
              <GameReviews game={game}/>
              <h3>Released:</h3><Moment className="release-date" format="MM/DD/YYYY">{game.released}</Moment>
              <br/>
              <Button className="collection-button" type="button" onClick={() => props.addGame(game, true)}>Add to Your Collection</Button>
              <Button className="collection-button" type="button" onClick={() => props.addGame(game, false)}>Add to Wishlist</Button>
            </li>
          ))
        }
      </ul>
      <p>Game data and pictures provided by <a href="https://rawg.io/">RAWG</a></p>
    </div>
  )
}

export default withRouter(GameResults)
