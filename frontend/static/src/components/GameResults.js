import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import Cookies from 'js-cookie';
import {Button} from 'react-bootstrap';
import GameReviews from './GameReviews'

const GameResults = (props) => {

  const addGame = (game, is_owned) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify({
        name: game.name,
        released: game.released,
        background_image: game.background_image,
        is_owned,
      })
    }
  fetch('/api/v1/games/', options)
    .then(response => {
      if(!response.ok) {
        throw new Error('Network response not ok');
      }
      return response.json();
    })
      alert('Game added to your list!')
}
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
              <Button className="collection-button" type="button" onClick={() => addGame(game, true)}>Add to Your Collection</Button>
              <Button className="collection-button" type="button" onClick={() => addGame(game, false)}>Add to Wishlist</Button>
            </li>
          ))
        }
      </ul>
      <p>Game data and pictures provided by <a href="https://rawg.io/">RAWG</a></p>
    </div>
  )
}

export default withRouter(GameResults)
