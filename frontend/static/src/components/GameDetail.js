const GameDetail = (props) => {

  const {game} = props.location.gameProps

  return(
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt="screenshot"/>
      <p>Released: {game.released}</p>
      <p>Playtime: ~ {game.playtime} hours</p>
      <h3>Platform(s):</h3>
      {
        game.platforms.map(p => `${p.platform.name} |`)
      }
    </div>
  )
}

export default GameDetail;
