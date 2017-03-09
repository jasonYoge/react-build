import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './BlogHeader';
import List from './BlogList';
import Footer from './Footer';
import Loading from './BlogLoading';
import { Lifecycle } from 'react-router';
import { fetchBlogList } from '../actions/blogListAction';
require('../css/Blog.scss');

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { dispatch, data, display } = this.props;

        return (
            <div className="blog">
                <Header></Header>
                <List data={ data } display={ !display } fetchBlogList={
                    bindActionCreators(fetchBlogList, dispatch)
                }></List>
                <div className="footer" style={{ display: display ? 'block' : 'none' }}>
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
        data: state.blogList.get('data'),
        display: state.blogList.get('displayState')
    }
}

export default connect(selector)(Blog);
