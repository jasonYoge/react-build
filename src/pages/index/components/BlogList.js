import React, { Component, PropTypes } from 'react';
require('../css/BlogList.scss');

/**
 *  App component is top component of all.
 */
export default class BlogList extends Component {
    componentWillMount() {
        // console.log(this.props.item);
        this.props.onInit();
    }

    render() {
        console.log(this.props.item);
        return (
            <section className="blog-list">
            </section>
        );
    }
}

BlogList.propTypes = {
    onInit: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
