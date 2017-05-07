import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
    render() {
        return (
            <div>
                <main>
                    <div class-name="content-container">
                        {this.props.content}
                        Hello from App!
                    </div>
                </main>
            </div>
        );
    }
}

const AppContainer = createContainer(
    props => {return {props};},
    App
);

export default AppContainer;
