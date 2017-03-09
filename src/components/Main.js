import React, { Component } from 'react';
import Navbar from './Navbar';
// require('font-awesome-webpack');
require('../css/Main.scss');

/**
 *  App component is top component of all.
 */
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar router={this.props.router}></Navbar>
                {this.props.children}
            </div>
        );
    }
}
