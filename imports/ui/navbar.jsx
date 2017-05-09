import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data';

class Navbar extends Component {
    render() {
        return (
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Sass</a></li>
                <li><a href="#">Components</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </div>
          </nav>
        );
    }
}

const navbarContainer = createContainer(
    () => { return {user: Meteor.user} ;},
    Navbar
);

export default navbarContainer;
