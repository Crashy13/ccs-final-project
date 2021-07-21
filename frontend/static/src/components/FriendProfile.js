import React from 'react';
import CollectionDetails from './CollectionDetails'
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';
import GameReviews from './GameReviews';
import Cookies from 'js-cookie';
import {Button} from 'react-bootstrap';


class FriendProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    }
  this.addGame = this.addGame.bind(this);
  }

  componentDidMount() {

    const friendId = this.props.match.params.friendId;

    fetch(`/api/v1/games/owner/${friendId}/`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({games:data}))
      .catch(error => {
        console.error('There has been a problem with your fetch request:', error)
      })
  }

  addGame(game, is_owned) {
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

  render() {
    const games = this.state.games.map(game => (
      <li key={game.id} className="collection-item">
        <h2 className="collection-title">{game.name}</h2>
        <section className="collection-body">
        <img src={game.background_image} alt="game screenshot"/>
        <p>Date Added To Collection:</p><Moment className="release-date" format="MM/DD/YYYY">{game.date_added}</Moment>
        <br/>
        <br/>
        <p>Play Status: {game.play_status}</p>
        <GameReviews game={game}/>
        <Button className="collection-button" type="button" onClick={() => this.addGame(game, false)}>Add to Wishlist</Button>
        </section>
      </li>
    ))
    return(
      <div className="main-container">
        <div className="collection-main-container">
          <h1>THEIR COLLECTION</h1>
          <br/>
          <div className="collection-container">
              <ul className="collection-list">{games}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(FriendProfile)
