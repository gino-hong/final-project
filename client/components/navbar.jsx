import React from 'react';
import AppContext from '../lib/app-context';

export default class Navbar extends React.Component {
  render() {
    const { user, handleSignOut } = this.context;
    return (
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <h2 className="text-dark otracku">
              Otracku
            </h2>
          </a>
          <div>
            {user !== null &&
            <div>
              <a href="#add-entry" className="btn btn-primary">
                Add entry
                <i className="fa-solid fa-plus" />
              </a>
              <a href="#sign-in" className="btn btn-dark" onClick={handleSignOut}>
                Sign out
                <i className="ms-2 fas fa-sign-out-alt" />
              </a>
            </div>
              }
            {user === null &&
            <>
              <a href="#sign-in" className="btn btn-primary">
                Sign In
              </a>
              <a href="#sign-up" className="btn btn-dark">
                Sign Up
              </a>
            </>
              }
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.contextType = AppContext;
