import React, {useState} from 'react';
import GameResults from './GameResults'
require('dotenv').config()

const GameSearch = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${slug}`)
      .then(response => response.json())
      .then(({results}) => {
        results === undefined ? alert('no games found') : setGameResults(results)
      })
      setSearchTerm('')
  }
  return(
    <div>
      <h1>Game Search</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange}/>
          <input type="submit"/>
        </form>
        <GameResults gameResults={gameResults} />
    </div>
  )
}

export default GameSearch
