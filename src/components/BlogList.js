import React, { Component, PropTypes } from 'react';
import ListItem from './BlogListItem';
require('../css/BlogList.scss');

//  博客列表部分
export default class BlogList extends Component {
    //  第一次渲染组件时，从服务器拉取数据
    componentWillMount() {
        if (this.props.data.length === 0) {
            this.props.fetchBlogList();
        } else {
            this.props.showLoading(false);
        }
    }

    //  判断数据是否更新，并且重新渲染组件
    shouldComponentUpdate (nextProp, nextState) {
        if (nextProp.data.length !== 0) {
            //  预留时间渲染页面
            setTimeout(() => {
                this.props.showLoading(false);
            }, 1000);
            return true;
        }
        return false;
    }

    render() {
        return (
            <ul className="blog-list" >
                { this.renderItems() }
            </ul>
        );
    }

    //  渲染列表项生成函数
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
    showLoading: PropTypes.func.isRequired
}
