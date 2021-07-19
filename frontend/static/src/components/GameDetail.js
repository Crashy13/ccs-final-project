import React, {useState} from 'react'
import Cookies from 'js-cookie'
import Moment from 'react-moment';
import {Modal, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'

const GameDetail = (props) => {

  const {game} = props.location.gameProps
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <Button variant="primary" onClick={handleShow}>
      Show Game
    </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{game.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={game.background_image} alt="screenshot"/>
        <h3>Released:</h3><Moment className="release-date" format="MM/DD/YYYY">{game.released}</Moment>
        <h3>Platform(s):</h3>
        <p>{
          game.platforms.map(p => `${p.platform.name} |`)
        }</p>
        <br/>
        <button type="button" onClick={() => addGame(true)}>Add to Your Collection</button>
        <button type="button" onClick={() => addGame(false)}>Add to Wishlist</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <p>Game data and pictures provided by <a href="https://rawg.io/">RAWG</a></p>
    </div>
  )
}

export default withRouter(GameDetail);
