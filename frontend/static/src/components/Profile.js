import React from 'react'
import Cookies from 'js-cookie'
import ProfileDetails from './ProfileDetails'
import Reviews from './Reviews';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      avatar: null,
      preview: '',
    }

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
      .then(data => this.setState({data})).catch(error => {
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
    formData.append('avatar', this.state.avatar);
    formData.append('display_name', this.state.display_name);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    };

    const response = await fetch('/api/v1/users/profiles/', options);
    this.setState({response});
  }

  render() {
    return(
      <>
      <div>
        {this.state.data
          ? (<ProfileDetails />)
          : <form onSubmit={this.handleSubmit}>
            <input type="text" name="display_name" value={this.state.display_name} onChange={this.handleInput}/>
            <input type="file" name="avatar" onChange={this.handleImage} />

            {
              this.state.avatar
              ? <img src={this.state.preview} alt=""/>
              : null
            }

            <button type='submit'>Save profile?</button>

          </form>}

            <h1>Personal Reviews</h1>
            <Reviews />

      </div>
      </>
    )
  }
}

export default Profile
