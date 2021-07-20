import React from 'react'
import Registration from './Registration'



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state)
  }


  render() {
    return(
      <>
      <div className="login-page-container">
      <div className='login-container'>
          <form onSubmit={this.handleSubmit}>
              <h3>Enter Username</h3>
              <label for="username1"></label>
                <input type="text" id="username1" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
                <br/>
              <h3>Enter Email</h3>
              <label for="email1"></label>
                <input id="email1" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
                <br/>
              <h3>Enter Password</h3>
              <label for="password"></label>
                <input type="password" placeholder="password" id="password" name="password" value={this.state.password1} onChange={this.handleInput}/>
                <br/>
                <button className="login-button" type="Submit" onClick={this.redirectToHome}>Submit</button>
          </form>
        </div>
        <div className="registration-container">
        <Registration />
        </div>
        </div>
        </>
    )
  }
}

export default Login
