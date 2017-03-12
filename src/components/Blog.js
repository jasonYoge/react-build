import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './BlogHeader';
import List from './BlogList';
import Footer from './Footer';
import classNames from 'classnames';
import { Lifecycle } from 'react-router';
import { fetchBlogList } from '../actions/blogListAction';
import { showLoadingCreator } from '../actions/showLoadingAction';
require('../css/Blog.scss');

// @connect(state => ({
//     data: state.blogList.get('data'),
//     display: state.displayState
// }))
class Blog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { dispatch, data, display } = this.props;
        let classnames = classNames({
            blog: true,
            'blog-hide': !display
        });

        return (
            <div className={ classnames }>
                <Header></Header>
                <List data={ data } fetchBlogList={
                    bindActionCreators(fetchBlogList, dispatch)
                } showLoading={
                    bindActionCreators(showLoadingCreator, dispatch)
                }></List>
                <div className="footer">
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
        display: !state.showLoading
    }
}

export default connect(selector)(Blog);
