import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../utils/route_utils';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="main-container">
          <section className="main">
            <h1>Write Away.</h1>

            <h2>A low-commitment alternative to journaling</h2>

            <div className="session-buttons-container">
              <a href="#" className="session-buttons">Sign Up</a>
              <a href="#" className="session-buttons">Log In</a>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Homepage;
