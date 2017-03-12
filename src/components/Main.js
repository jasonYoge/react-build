import React, { Component } from 'react';
import Navbar from './Navbar';
import Loading from './Loading';
require('../css/Main.scss');

/**
 *  App component is top component of all.
 */
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar router={this.props.router}></Navbar>
                <Loading />
                {this.props.children}
            </div>
        );
    }
}
