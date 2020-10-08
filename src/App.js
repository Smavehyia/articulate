import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import UserDashboard from './components/Dashboard/UserDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={UserDashboard} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
