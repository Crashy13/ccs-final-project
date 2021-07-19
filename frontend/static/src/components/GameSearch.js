import React, {useState} from 'react';
import GameResults from './GameResults';
import {Modal, Button} from 'react-bootstrap';
require('dotenv').config()


const GameSearch = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button className="collection-button" variant="primary" onClick={handleShow}>
        Add New Game
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange}/>
            <input type="submit"/>
          </form>
          <GameResults gameResults={gameResults} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default GameSearch
