import React from 'react'
import Cookies from 'js-cookie'
import CollectionDetails from './WishlistDetails'

class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    }
    this.removeGame = this.removeGame.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/games/`)
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

  render() {
    const games = this.state.games.map(game => (
      <CollectionDetails key={game.id} game={game} removeGame={this.removeGame} />
    ))
    return(
    <>
      <h1>YOUR WISHLIST</h1>
      <ul>{games}</ul>
    </>
    )
  }
}

export default Wishlist
