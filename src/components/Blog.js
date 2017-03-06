import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './BlogHeader';
import List from './BlogList';
import Loading from './BlogLoading';
import Footer from './Footer';
import { Lifecycle } from 'react-router';
import { getData, changeFetchState, finishedOne } from '../actions/fetchDataList';
require('../css/Blog.scss');

/**
 *  App component is top component of all.
 */
class Blog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { dispatch, data, isFetching, count } = this.props;
        return (
            <div className="blog">
                <Header></Header>
                <Loading loadingFinished={ () =>
                    dispatch(changeFetchState(false))
                } count={ count } isFetching={ isFetching }></Loading>
                <List count={ count } onFinished={ () => dispatch(finishedOne()) } isFetching={ isFetching } items={ data } onInit={ () =>
                        dispatch(getData())
                }></List>
                <div className="footer" style={{ display: this.props.isFetching ? 'none' : 'block' }}>
                    <Footer></Footer>
                </div>
            </div>
        );
    }

    routerWillLeave (nextLocation) {
        console.log(123);
    }
}

function selector (state) {
    return {
        data: state.data,
        isFetching: state.fetchState,
        count: state.count
    }
}

export default connect(selector)(Blog);
