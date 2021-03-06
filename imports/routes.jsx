import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from './ui/App.jsx';

FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(AppContainer, {
            content: <p>Hi there!</p>
        });
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        mount(AppContainer, {
            content: <p>Hi from the registration/login page!</p>
        });
    }
});
