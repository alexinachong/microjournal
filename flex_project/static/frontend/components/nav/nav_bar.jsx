import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (currentUser) {
      return (
        <div>
          <nav className="nav-container">
            <nav className="nav">
              <h3><a href="#" className="main-links">Write Away</a></h3>
            </nav>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="nav-container">
            <nav className="nav">
              <h3><a href="#" className="main-links">Write Away</a></h3>
              <section className="nav-items">
                <a href="#" className="main-links nav-items-links">Dashboard</a>
                <a href="#" className="main-links nav-items-links">Feed</a>
                <a href="#" className="main-links nav-items-links">Statistics</a>
              </section>
              <section className="nav-dropdown">
                <div className="nav-dropdown-email">{this.props.currentUser.email}</div>
                <div className="nav-dropdown-content">
                  <a href="#" className="nav-dropdown-elements main-links">Settings</a>
                  <a href="#" className="nav-dropdown-elements main-links">Log Out</a>
                </div>
              </section>
            </nav>
          </nav>
        </div>
      );
    }
  }
}

export default NavBar;
