import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleRegistration(this.state)
  }

  render() {
    return(
          <form onSubmit={this.handleSubmit}>
            <h3>Choose A Username</h3>
            <label for="username"></label>
              <input id="username" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
              <br/>
            <h3>Enter Your Email Address</h3>
            <label for="email"></label>
              <input id="email" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
              <br/>
            <h3>Choose A Password</h3>
            <label for="password1"></label>
              <input id="password1" type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
              <br/>
            <h3>Enter Your Password Again</h3>
            <label for="password2"></label>
              <input id="password2" type="password" placeholder="enter password again" name="password2" value={this.state.password2} onChange={this.handleInput}/>
              <br/>
            <button className="login-button" type="Submit">Register</button>
          </form>
    )
  }
}

export default Registration
