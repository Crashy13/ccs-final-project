import React from 'react';
import Cookies from 'js-cookie';
import {withRouter, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import ProfileSearch from './ProfileSearch'


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      display_name: '',
      avatar: null,
      preview: '',
      isEditing: false,
    }

    this.addFriend = this.addFriend.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleImage(e) {
    let file = e.target.files[0]
    this.setState({
      avatar: file,
    });

    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  async handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    if(this.state.avatar instanceof File) {
      formData.append('avatar', this.state.avatar);
    }
    formData.append('display_name', this.state.display_name);

    let method;
    let url;

    if(this.state.id) {
      method = 'PATCH';
      url = '/api/v1/users/profiles/user/'
    } else {
      method = 'POST';
      url = '/api/v1/users/profiles/';
    }

    const options = {
      method,
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    };

    const response = await fetch(url, options);
    this.setState({isEditing: false})
    alert('Profile saved!', response);
  }

  addFriend(friend) {

    let friends = [...this.state.friends, friend];
    this.setState({friends});

    friends = [...this.state.friends].map(friend => friend.id);

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify({friends}),
    }

    fetch(`/api/v1/users/profiles/add_follower/`, options)
      .then(response => response.json())
      .then(data => {
        console.log('data', data)
        // const friends = [...this.state.friends, data];
        // th
        // this.setState({data});
      })
  }

  render() {
    const friends = this.state.friends.map(friend => (
      <li key={friend.id}>
        <img className="friend-list-avatar" src={friend.avatar} alt=""/>
        <Link className="friend-list-link" to={`/friends/${friend.user}/collection`}>{friend.display_name}</Link>
      </li>
    ))
    return(
      <>
      <div className="main-container">
        <div className="collection-main-container">
          <div className="collection-topbar">
            <h1 className="collection-topbar-title">MY PROFILE</h1>
          </div>
        <div className="profile-main-container">
          <div className="friends-list">
            <ProfileSearch addFriend={this.addFriend}/>
              <h3>Friends</h3>
              <ul>{friends}</ul>
          </div>
          <div className="profile-details">
            <form>
              <label htmlFor="display-name">Display name: </label>
              <input id="display-name" type="text" name="display_name" value={this.state.display_name} onChange={this.handleInput} disabled={!this.state.isEditing}/>

              <div className="profile-image-container">
                <input type="file" name="avatar" onChange={this.handleImage} className={(this.state.avatar || this.state.preview) && 'overlay'}/>
                { this.state.avatar && !this.state.preview && <img className="profile-image" src={this.state.avatar} alt=""/> }
                { this.state.preview && <img className="profile-image" src={this.state.preview} alt=""/> }
              </div>

              {
                !this.state.isEditing
                ? <Button className="collection-button" type='button' onClick={() => this.setState({isEditing: true})}>Edit</Button>
                : <Button className="collection-button" type='button' onClick={this.handleSubmit}>Save</Button>
              }
            </form>
          </div>
        </div>
        </div>
      </div>
      </>
    )
  }
}

export default withRouter(Profile)
