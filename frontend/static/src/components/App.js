import React from 'react';
import Cookies from 'js-cookie';
import Login from './Login';
import Registration from './Registration';
import UserHomepage from './UserHomepage';
import Navbar from './Navbar';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import PrivateRoute from './PrivateRouter';
import Profile from './Profile';
import GameSearch from './GameSearch'
import GameDetail from './GameDetail'
import Wishlist from './Wishlist'
import ReviewSubmit from './ReviewSubmit'
import LandingPage from './LandingPage'
import ProfileSearch from './ProfileSearch'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: !!Cookies.get('Authorization') ? 'userhomepage' : 'login'
    }

    this.handleNavigation = this.handleNavigation.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

handleNavigation(selection) {
  this.setState({selection});
}

async handleRegistration(user) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(user),
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/registration/', options).catch(handleError);

  if(response.ok) {
    const data = await response.json().catch(handleError);
    Cookies.set('Authorization', `Token ${data.key}`)
    this.props.history.push('/profile')
  }
}

async handleLogin(user) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(user),
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/login/', options).catch(handleError);

  if(response.ok) {
    const data = await response.json().catch(handleError);
    Cookies.set('Authorization', `Token ${data.key}`)
    this.props.history.push('/userhomepage')
  }
}

async handleLogout() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    }
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/logout/', options).catch(handleError);

  if(response.ok) {
    Cookies.remove('Authorization');
    this.props.history.push('/')
  }
}


  render() {
    return (
        <div className="main_container">
          <>
            <Navbar handleNavigation={this.handleNavigation} handleLogout={this.handleLogout} />
              <div>
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/login">
                    <Login handleNavigation={this.handleNavigation} handleLogin={this.handleLogin} />
                  </Route>
                  <Route path="/register">
                    <Registration handleNavigation={this.handleNavigation} handleRegistration={this.handleRegistration}/>
                  </Route>
                  <PrivateRoute path="/userhomepage">
                    <UserHomepage/>
                  </PrivateRoute>
                  <PrivateRoute path="/profile">
                    <Profile/>
                  </PrivateRoute>
                  <PrivateRoute path="/gamesearch">
                    <GameSearch/>
                  </PrivateRoute>
                  <PrivateRoute path='/game/:name'>
                    <GameDetail/>
                  </PrivateRoute>
                  <PrivateRoute path='/wishlist'>
                    <Wishlist/>
                  </PrivateRoute>
                  <PrivateRoute path='/submitreview'>
                    <ReviewSubmit/>
                  </PrivateRoute>
                  <PrivateRoute path='/profilesearch'>
                    <ProfileSearch/>
                  </PrivateRoute>
                </Switch>
              </div>
          </>
        </div>
    );
  }
}

export default withRouter(App);
