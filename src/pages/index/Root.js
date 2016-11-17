import React, { PropTypes } from'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/Main';
import Profile from './components/Profile';
import Blog from './components/Blog';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <indexRedirect to='/profile' />
                <Route path="profile" component={Profile} />
                <Route path="blog" component={Blog} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
