import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data';

class Navbar extends Component {
    render() {
        const self = this;
        return (
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                { self.props.user ?
                  <li><a href="/login">Sign In</a></li> :
                  <li><a href="/register">Register</a></li> }
                <li><a href="#">About</a></li>
              </ul>
            </div>
          </nav>
        );
    }
}

const navbarContainer = createContainer(
    () => { return {user: Meteor.user()} ;},
    Navbar
);

export default navbarContainer;
