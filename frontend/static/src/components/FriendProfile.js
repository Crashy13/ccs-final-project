import React from 'react';
import CollectionDetails from './CollectionDetails'

class FriendProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    }
  }

  componentDidMount() {
    fetch(`/api/v1/games/owners/?owner=admin`)
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

  render() {
    const games = this.state.games.map(game => (
      <CollectionDetails key={game.id} game={game} removeGame={this.removeGame} updateStatus={this.updateStatus} />
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

export default FriendProfile
