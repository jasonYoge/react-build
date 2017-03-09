import React, { PropTypes } from'react';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from './components/Main';
import Profile from './components/Profile';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Profile} />
                <Route path="profile" component={Profile} />
                <Route path="blog" getComponent={(nextState, callback) => {
                    System.import('./components/Blog').then(Blog => {
                        callback(null, Blog.default);
                    });
                }} />
                <Route path="article/:id" getComponent={ (nextState, callback) => {
                    System.import('./components/Article').then(Article => {
                        callback(null, Article.default);
                    });
                }} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
