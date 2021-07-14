import React from 'react'

class ProfileSearchDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      avatar: null,
      preview: '',
    }

  }


  render() {
    const profile = this.props.profile
    return(
      <>
        <li>
          <h3>{profile.display_name}</h3>
          <img src={profile.avatar} alt=""/>
        </li>
      </>
    )
  }
}


export default ProfileSearchDetails
