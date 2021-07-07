import {useState} from 'react';
import Results from './Results'
require('dotenv').config()

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games/${slug}?key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(({data}) => {
        setGameResults(data)
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
        <Results gameResults={gameResults} />
    </div>
  )
}

export default Search
