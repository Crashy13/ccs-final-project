import React from 'react'
import ProfileSearch from './ProfileSearch'
import Cookies from 'js-cookie'

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      display_name: '',
      avatar: null,
      preview: '',
    }
    this.addFriend = this.addFriend.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/users/profiles/user/`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({...data})).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      })
  }

  addFriend(friendId) {
    const friends = [...this.state.friends, friendId];
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify({friends}),
    }

    fetch(`/api/v1/users/profiles/user/`, options)
      .then(response => response.json())
      .then(data => {
        this.setState(data);
        console.log(data);
      })
  }

  render() {
    const friends = this.state.friends.map(friend => (
      <li key={friend.id}>
        <p>{friend.display_name}</p>
      </li>
    ))
    return(
      <>
      <ProfileSearch addFriend={this.addFriend}/>
        <h3>Friends</h3>
        <ul>
          <p>{friends}</p>
        </ul>
      </>
    )
  }
}

export default FriendList
