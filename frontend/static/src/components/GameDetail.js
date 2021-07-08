import Cookies from 'js-cookie'

const GameDetail = (props) => {

  const {game} = props.location.gameProps


  const addGame = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify()
    }
  fetch('/api/v1/games/', options)
    .then(response => {
      if(!response.ok) {
        throw new Error('Network response not ok');
      }
      return response.json();
    })
}

  return(
    <div>
      <h1>{game.id.name}</h1>
      <img src={game.background_image} alt="screenshot"/>
      <p>Released: {game.released}</p>
      <p>Playtime: ~ {game.playtime} hours</p>
      <h3>Platform(s):</h3>
      {
        game.platforms.map(p => `${p.platform.name} |`)
      }
      <br/>
      <button type="button" onClick={addGame}>Add to Your Collection</button>
    </div>
  )
}

export default GameDetail;
