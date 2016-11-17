import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './BlogHeader';
import List from './BlogList';
import { getData } from '../actions/fetchDataList';
require('../css/Blog.scss');

/**
 *  App component is top component of all.
 */
class Blog extends Component {
    render() {
        const { dispatch, data } = this.props;
        return (
            <div className="blog">
                <Header></Header>
                <List item={data} onInit={() =>
                        dispatch(getData())
                }></List>
            </div>
        );
    }
}

function selector (state) {
    return {
        data: state.data
    }
}

export default connect(selector)(Blog);
