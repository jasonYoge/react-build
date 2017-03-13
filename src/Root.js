import React, { PropTypes } from'react';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, hashHistory, Redirect, IndexRedirect } from 'react-router';
import { showLoadingCreator } from './actions/showLoadingAction';
import App from './components/Main';
import Profile from './components/Profile';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="profile" />
                <Route path="profile" component={Profile} />
                <Route onEnter={ dispatchShowLoadingAction.bind(store) } path="blog" getComponent={(nextState, callback) => {
                    System.import('./components/Blog').then(Blog => {
                        callback(null, Blog.default);
                    });
                }} />
                <Route onEnter={ dispatchShowLoadingAction.bind(store) } path="article/:id" getComponent={ (nextState, callback) => {
                    System.import('./components/Article').then(Article => {
                        callback(null, Article.default);
                    });
                }} />
            </Route>
        </Router>
    </Provider>
);

function dispatchShowLoadingAction (nextState, replaceState) {
    this.dispatch(showLoadingCreator(true));
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
