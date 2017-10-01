import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import { createContainer } from 'meteor/react-meteor-data';

import Header from './navbar.jsx';
import Footer from './footer.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="content-container">
                        {this.props.user ?
                            this.props.content :
                            <AccountsUIWrapper />
                        }
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    user: PropTypes.object,
    content: PropTypes.object
};

const AppContainer = createContainer(
    () => {
        return {user: Meteor.user()};
    },
    App
);

export default AppContainer;
