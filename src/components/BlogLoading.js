import React, { Component, PropTypes } from 'react';
require('../css/BlogLoading.scss');

export default class BlogLoading extends Component {
    render () {
        let { finished, size } = this.props.count;
        let percent = size ? (finished / size) : size;
        if (percent === 1 && this.props.isFetching) {
            this.props.loadingFinished(false);
        }

        return (
            <div className="blog-loading" style={{ display: this.props.isFetching ? 'block' : 'none' }}>
                { percent }%
            </div>
        );
    }
}

BlogLoading.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    loadingFinished: PropTypes.func.isRequired
}
