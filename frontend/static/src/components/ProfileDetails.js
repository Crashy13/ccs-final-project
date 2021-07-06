import React from 'react'
import Cookies from 'js-cookie'

class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      avatar: null,
      preview: '',
    }

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


  render() {
    return(
      <>
        <img src={this.state.data?.avatar} alt="Profile photo"/>
        <p>{this.state.data?.display_name}</p>
      </>
    )
  }
}


export default ProfileDetails
