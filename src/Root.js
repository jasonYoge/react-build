import React, { PropTypes } from'react';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from './components/Main';
import Profile from './components/Profile';
import Blog from './components/Blog';
import Article from './components/Article';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute path="profile" component={Profile} />
                <Route path="profile" component={Profile} />
                <Route path="blog" component={Blog} />
                <Route path="article/:id" component={Article} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
