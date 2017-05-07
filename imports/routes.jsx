import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from './ui/App.ui/App.jsx';

FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(AppContainer, {
            content: <Homepage />
        });
    }
});
