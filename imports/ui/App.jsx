import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data';

import Header from './navbar.jsx';
import Footer from './footer.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="content-container">
                        {this.props.content}
                        Hi there from App.jsx
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

const AppContainer = createContainer(
    () => {
        return {user: Meteor.user};
    },
    App
);

export default AppContainer;
