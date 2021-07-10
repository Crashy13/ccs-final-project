import React from 'react'

class LandingPage extends React.Component {
  render() {
    return(
      <>
      <button>Log In</button>
      <button>Register</button>
      <div className="frontpage-container">
        <p className="frontpage-item">Keep track of your game collection</p>
        <p className="frontpage-item">Create your own reviews, ratings and recommendations</p>
        <p className="frontpage-item">Connect with friends to share see what they're playing</p>
      </div>
      </>
    )
  }
}

export default LandingPage
