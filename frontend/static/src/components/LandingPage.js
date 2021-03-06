import React from 'react'

class LandingPage extends React.Component {
  render() {
    return(
      <>
      <div className="container">
        <div className="frontpage-main-title-container">
          <h1 className="frontpage-main-title">Y G Y W</h1>
          <p className="frontpage-main-tag">YOUR GAMES YOUR WAY</p>
        </div>
      <div className="frontpage-container">
        <div className="frontpage-item">
        <i className="fas fa-gamepad fa-3x frontpage-icon"></i>
        <p className="frontpage-title">Your Collection</p>
        <p className="frontpage-body">Keep track of your game collection</p>
        </div>
        <div className="frontpage-item">
        <i className="far fa-keyboard fa-3x frontpage-icon"></i>
        <p className="frontpage-title">Your Input</p>
        <p className="frontpage-body">Create your own reviews, ratings and recommendations</p>
        </div>
        <div className="frontpage-item">
        <i className="fas fa-users fa-3x frontpage-icon"></i>
        <p className="frontpage-title">Your Community</p>
        <p className="frontpage-body">Connect with friends to share and see what they're playing</p>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default LandingPage
