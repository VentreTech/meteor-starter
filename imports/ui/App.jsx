import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

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
                        {this.props.user ? this.props.content :
                        <AccountsUIWrapper />}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

const AppContainer = createContainer(
    () => {
        return {user: Meteor.user()};
    },
    App
);

export default AppContainer;
