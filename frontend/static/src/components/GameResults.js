import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import Cookies from 'js-cookie';

const GameResults = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

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
              <h3>Released:</h3><Moment className="release-date" format="MM/DD/YYYY">{game.released}</Moment>
              <br/>
              <button type="button" onClick={() => addGame(game, true)}>Add to Your Collection</button>
              <button type="button" onClick={() => addGame(game, false)}>Add to Wishlist</button>
            </li>
          ))
        }
      </ul>
      <p>Game data and pictures provided by <a href="https://rawg.io/">RAWG</a></p>
    </div>
  )
}

export default withRouter(GameResults)
