import React, { Component, PropTypes } from 'react';
import ListItem from './BlogListItem';
require('../css/BlogList.scss');

export default class BlogList extends Component {
    componentWillMount() {
        if (this.props.data.length === 0) {
            this.props.fetchBlogList();
        }
    }

    render() {
        return (
            <ul className="blog-list" style={{ display: this.props.display ? 'block' : 'none' }}>
                { this.renderItems() }
            </ul>
        );
    }

    renderItems () {
        const data = this.props.data;

        if (data.length === 0) {
            return;
        }

        return data.map((item) => {
            return (
                <ListItem key={item._id} id={ item._id } date={ item.date }
                    desc={ item.desc } tag={ item.tags } title={ item.title }></ListItem>
            );
        });
    }
}

BlogList.propTypes = {
    fetchBlogList: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    display: PropTypes.bool.isRequired
}
