import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Signin from './auth/Signin';
import Jokes from './Jokes/Jokes';
import Signup from './auth/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.logoutHandler}> Logout </button>
          <Link to='/signup'>
          <button> Register </button>
          </Link>
          <Link to='/signin'>
          <button> Login </button>
          </Link>
          <Link to='/jokes'>
          <button> Jokes </button>
          </Link>

          </div>

        <Route path="/signin" component={Signin} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/signup" component={Signup} />
      </div>
    );
  }

  logoutHandler = event => {
    localStorage.removeItem('jwt');
  }
}

export default App;