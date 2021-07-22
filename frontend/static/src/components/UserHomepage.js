import React from 'react';
import Cookies from 'js-cookie';
import CollectionDetails from './CollectionDetails';
import GameSearch from './GameSearch';
import {Button} from 'react-bootstrap';

class UserHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.filterCompleted = this.filterCompleted.bind(this)
    this.filterPlaying = this.filterPlaying.bind(this)
    this.filterUnstarted = this.filterUnstarted.bind(this)
    this.removeGame = this.removeGame.bind(this)
    this.updateStatus = this.updateStatus.bind(this);
    this.addGame = this.addGame.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/games/?is_owned=true`)
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
      alert('Game added to your list!')
      return response.json();
    }).then(data => {
      const games = [...this.state.games, data];
      this.setState({games})
    })

}

  filterCompleted() {
    fetch(`api/v1/games/?play_status=COMPLETED`)
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

  filterPlaying() {
    fetch(`api/v1/games/?play_status=PLAYING`)
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

  filterUnstarted() {
    fetch(`api/v1/games/?play_status=UNSTARTED`)
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
    const id = game.id;
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
        const games = [...this.state.games];
        console.log('games', games)
        console.log('game', game)
        const index = games.findIndex(game => game.id === id);
        // console.log('index', index);
        games[index] = data;
        this.setState({games});
      });
  }


  render() {
    const games = this.state.games.map(game => (
      <CollectionDetails key={game.id} game={game} removeGame={this.removeGame} updateStatus={this.updateStatus} />
    ))
    return(
    <>
      <div className="main-container">
        <div className="collection-main-container">
          <div className="collection-topbar">
            <h1 className="collection-topbar-title">MY COLLECTION</h1>
          </div>
          <br/>
          <div className="filter-buttons">
            <GameSearch addGame={this.addGame}/>
            <h2 className="filter-header">Filter By:</h2>
            <Button className="filter-button fb-all" type="button" onClick={this.componentDidMount}>All</Button>
            <Button className="filter-button" type="button" onClick={this.filterCompleted}>Completed</Button>
            <Button className="filter-button fb-playing" type="button" onClick={this.filterPlaying}>Playing</Button>
            <Button className="filter-button" type="button" onClick={this.filterUnstarted}>Unstarted</Button>
          </div>
          <div className="collection-container">
              <ul className="collection-list">{games}</ul>
          </div>
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
