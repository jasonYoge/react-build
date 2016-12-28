import React, { Component, PropTypes } from 'react';
import ListItem from './BlogListItem';
require('../css/BlogList.scss');

/**
 *  App component is top component of all.
 */
export default class BlogList extends Component {
    // get data from server when component is mount first time
    componentWillMount() {
        this.props.onInit();
    }

    render() {
        return (
            <ul className="blog-list" style={{ display: !this.props.isFetching ? 'block' : 'none' }}>
                { this.renderItems() }
            </ul>
        );
    }

    renderItems () {
        let items = this.props.items;
        if (items.length === 0) {
            return;
        }
        return items.map((item) => {
            return (
                <ListItem onFinished={ this.props.onFinished } id={ item._id } date={ item.date }
                    desc={ item.desc } tag={ item.tags } title={ item.title }></ListItem>
            );
        });
    }
}

BlogList.propTypes = {
    onInit: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onFinished: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}
