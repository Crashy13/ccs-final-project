import React from 'react';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';
import CollectionDetails from './WishlistDetails';
import GameSearch from './GameSearch';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    }
    this.removeGame = this.removeGame.bind(this);
    this.updateOwned = this.updateOwned.bind(this);
    this.addGame = this.addGame.bind(this);
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
      alert('Game added to your list!')
      return response.json();
    }).then(data => {
      const games = [...this.state.games, data];
      this.setState({games})
    })

}

  componentDidMount() {
    fetch(`/api/v1/games/?is_owned=false`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({games:data})).catch(error => {
        console.error('There has been a problem with your fetch request:', error)
      })
  }

  removeGame(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }
    fetch(`/api/v1/games/${id}`, options)
      .then(response => {
        const games = [...this.state.games]
        const index = games.findIndex(game => game.id === id)
        games.splice(index, 1)
        this.setState({games})
      })
  }

  updateOwned(id) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify({
        is_owned: true
      }),
    }
    fetch(`/api/v1/games/${id}/?is_owned=false`, options)
      .then(response => response.json())
      .then(data => {
        const games = [...this.state.games]
        const index = games.findIndex(game => game.id)
        games[index] = data;
        this.setState({games})
        this.props.history.push('/userhomepage')
      })
  }

  render() {
    const games = this.state.games.map(game => (
      <CollectionDetails key={game.id} game={game} removeGame={this.removeGame} updateOwned={this.updateOwned} />
    ))
    return(
    <>
      <div className="main-container">
        <div className="collection-main-container">
          <h1 className="collection-topbar-wishlist">MY WISHLIST</h1>
          <GameSearch addGame={this.addGame}/>
          <br/>
          <div className="collection-container">
          <ul className="collection-list">{games}</ul>
          </div>
        </div>
    </div>
    </>
    )
  }
}

export default withRouter(Wishlist)
