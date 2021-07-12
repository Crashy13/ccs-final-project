import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const GameDetail = (props) => {

  const {game} = props.location.gameProps

  // const person = {name: 'Scotty', developer: true, baker: true};
  //
  // const {name, developer} = person;


  const addGame = (is_owned) => {
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
    props.history.push('/userhomepage')
}

  return(
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt="screenshot"/>
      <h3>Released: {game.released}</h3>
      <h3>Platform(s):</h3>
      <p>{
        game.platforms.map(p => `${p.platform.name} |`)
      }</p>
      <br/>
      <button type="button" onClick={() => addGame(true)}>Add to Your Collection</button>
      <button type="button" onClick={() => addGame(false)}>Add to Wishlist</button>
    </div>
  )
}

export default withRouter(GameDetail);
