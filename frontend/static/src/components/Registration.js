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
      <div className="registration_container">
          <form onSubmit={this.handleSubmit}>
            <h3>Choose A Username</h3>
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
            <h3>Enter Your Email Address</h3>
            <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
            <h3>Choose A Password</h3>
            <input type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
            <h3>Enter Your Password Again</h3>
            <input type="password" placeholder="enter password again" name="password2" value={this.state.password2} onChange={this.handleInput}/>
            <h3>Click the button below to create your account!</h3>
            <button className="login_button" type="Submit">Register</button>
          </form>
        </div>
    )
  }
}

export default Registration
