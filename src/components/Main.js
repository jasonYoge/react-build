import React, { Component } from 'react';
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
// require('font-awesome-webpack');
require('../css/Main.scss');
import Profile from './components/Profile';
import Blog from './components/Blog';
import Article from './components/Article';

/**
 *  App component is top component of all.
 */
export default class App extends Component {
    render() {
        return (
            <div className="app">

                <Navbar></Navbar>
                <Router history={createHistory()}>
                    <div>
                        <Route path="/" component={Profile} />
                        <Route path="blog" component={Blog} />
                        <Route path="article/:id" component={Article} />
                    </div>
            </Router>
            </div>
        );
    }
}
