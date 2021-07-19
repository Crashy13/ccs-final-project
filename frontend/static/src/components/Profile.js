import React from 'react';
import Cookies from 'js-cookie';
import {withRouter} from 'react-router-dom';
import Reviews from './Reviews';
import ProfileSearch from './ProfileSearch';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log('Profile saved!', response);
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
        console.log(data);
      })
  }

  render() {
    return(
      <>
      <ProfileSearch addFriend={this.addFriend}/>
        <div className="friends-list">
          <h3>Friends</h3>
          <p>{this.state.friends}</p>
        </div>
      <form>
        <label htmlFor="display-name">Display name</label>
        <input id="display-name" type="text" name="display_name" value={this.state.display_name} onChange={this.handleInput} disabled={!this.state.isEditing}/>

        <div className="profile-image-container">
          <input type="file" name="avatar" onChange={this.handleImage} />
          { this.state.avatar && !this.state.preview && <img src={this.state.avatar} alt=""/> }
          { this.state.preview && <img src={this.state.preview} alt=""/> }
        </div>

        {
          !this.state.isEditing
          ? <button type='button' onClick={() => this.setState({isEditing: true})}>Edit</button>
          : <button type='button' onClick={this.handleSubmit}>Save</button>
        }
      </form>
      <Reviews/>
      </>
    )
  }
}

export default withRouter(Profile)
