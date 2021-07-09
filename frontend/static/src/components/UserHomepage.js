import React from 'react'
import Cookies from 'js-cookie'
import CollectionDetails from './CollectionDetails'

class UserHomepage extends React.Component {
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
      <h1>MY COLLECTION</h1>
      <ul>{games}</ul>
    </>
    )
  }
}





// require('dotenv').config()
//
// componentDidMount() {
//   // fetch(`https://api.rawg.io/api/games/${searchTerm}?key=${process.env.REACT_APP_API_KEY}`)
//   // .then(response => response.json())
//   // .then(data => console.log(data))
// }


export default UserHomepage
