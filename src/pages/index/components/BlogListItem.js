import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
require('../css/BlogListItem.scss');

/**
 *  App component is top component of all.
 */
export default class BlogListItem extends Component {
    render() {
        return (
            <li className="blog-list-item" onClick={ () => { hashHistory.push(`article/${this.props.id}`); }}>
                <h4>{ this.props.title }</h4>
                <p className="blog-list-item-tag"><span>文章分类：</span>{ this.getTagname() }</p>
                <p className="blog-list-item-content">{ this.props.desc }</p>
                <div className="blog-list-item-tail">
                    <span>创建时间：{ this.getFormatDate() }</span>
                </div>
            </li>
        );
    }

    componentDidMount() {
        this.props.onFinished();
    }

    getTagname () {
        return this.props.tag.reduce((a, b) => {
            return `${a}, ${b}`;
        });
    }

    getFormatDate () {
        let dateArr = this.props.date.split('T');
        let date = dateArr[0];
        let timeArr = dateArr[1].split('.')[0];

        return `${date}   ${timeArr}`;
    }
}

BlogListItem.propTypes = {
    onFinished: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tag: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
