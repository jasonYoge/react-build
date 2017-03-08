import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from './reducers/reducer';
import Root from './Root';

let store = createStore(
    Reducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render( <Root store={store}/>, document.getElementById('app'));