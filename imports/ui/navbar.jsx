import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import R from 'ramda';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import {LiConstructor, mapHeaderLinks} from '../utils/rendering';

const headerLinks = [
];

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.rNavLinks = this.rNavLinks.bind(this);
    }
    rNavLinks() {
        const userTest = this.props.user ? i => i.showUser : i => !i.showUser;
        const anonTest = this.props.user ? i => !i.showAnon : i => i.showAnon;
        const checkLinks = R.allPass([userTest, anonTest]);
        return R.pipe(R.filter(checkLinks), R.map(mapHeaderLinks))(headerLinks);
    }
    render() {
        const self = this;
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {self.rNavLinks()}
                        {self.props.user ?
                            <li key="logout-button">
                                <a onClick={() => {Meteor.logout();}}>
                                    Log out
                                </a>
                            </li>
                            : ''}
                    </ul>
                </div>
            </nav>
        );
    }
}


Navbar.propTypes = {
    user: PropTypes.object
};



const navbarContainer = createContainer(
    () => { return {user: Meteor.user()} ;},
    Navbar
);

export default navbarContainer;
