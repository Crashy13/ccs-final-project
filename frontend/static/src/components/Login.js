import React from 'react'



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
      <div className='login_container'>
          <form onSubmit={this.handleSubmit}>
              <label>
                <p>Username</p>
                <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
              </label>
              <label>
                <p>Email</p>
                <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
              </label>
              <label>
                <p>Password</p>
                <input type="password" placeholder="password" name="password" value={this.state.password1} onChange={this.handleInput}/>
              </label>
                <h5>Press to login</h5>
                <button className="login_button" type="Submit" onClick={this.redirectToHome}>Submit</button>
          </form>
        </div>
    )
  }
}

export default Login
