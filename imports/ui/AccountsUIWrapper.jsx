import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class AccountsUIWrapper extends Component {
    render() {
        return <Blaze template="atForm" />;
    }
}
