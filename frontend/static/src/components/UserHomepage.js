import React from 'react'
import Cookies from 'js-cookie'
import CollectionDetails from './CollectionDetails'
import {Link} from 'react-router-dom'

class UserHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    }
    this.removeGame = this.removeGame.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/games/?is_owned=true`)
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
    fetch(`/api/v1/games/${id}/`, options)
      .then(response => {
        const games = [...this.state.games]
        const index = games.findIndex(game => game.id === id)
        games.splice(index, 1)
        this.setState({games})
      })
  }

  updateStatus(game) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(game)
    }
    fetch(`/api/v1/games/${game.id}/?is_owned=true`, options)
      .then(response => response.json())
      .then(data => {
        const games = [...this.state.games]
        const index = games.findIndex(game => game.id === game.id)
        games[index] = data;
        this.setState({games})
      })
  }


  render() {
    const games = this.state.games.map(game => (
      <CollectionDetails key={game.id} game={game} removeGame={this.removeGame} updateStatus={this.updateStatus} />
    ))
    return(
    <>
      <div className="main-container">
      <h1>MY COLLECTION</h1>
      <Link className="create-review-link" to="/search">Add New Game To Collection</Link>
      <div className="collection-container">
          <ul className="collection-list">{games}</ul>
      </div>
      </div>
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
