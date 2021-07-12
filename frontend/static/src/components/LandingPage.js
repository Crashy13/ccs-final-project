import React from 'react'

class LandingPage extends React.Component {
  render() {
    return(
      <>
      <div className="container">
      <div className="frontpage-container">
        <div className="frontpage-item">
        <p className="frontpage-title">Your Collection</p>
        <p className="frontpage-body">Keep track of your game collection</p>
        </div>
        <div className="frontpage-item">
        <p className="frontpage-title">Your Input</p>
        <p className="frontpage-body">Create your own reviews, ratings and recommendations</p>
        </div>
        <div className="frontpage-item">
        <p className="frontpage-title">Your Community</p>
        <p className="frontpage-body">Connect with friends to share see what they're playing</p>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default LandingPage
