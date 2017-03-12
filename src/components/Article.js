import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import Footer from './Footer';
import Content from './ArticleContent'
import { fetchArticleCreator } from '../actions/fetchArticleAction';
import { showLoadingCreator } from '../actions/showLoadingAction';
require('../css/Article.scss');

class Article extends Component {
    //  构造函数中，构造marked来编译markdown文件
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showPanel: false
        };
    }

    componentWillMount() {
        // const id = this.props.params.id;
        // const Xhttp = window.XMLHttpRequest;
        // let self = this;

        // if (Xhttp) {
        //     let xhr = new Xhttp();

        //     xhr.onload = event => {
        //         if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        //             this.refs.content.innerHTML = marked(xhr.responseText);
        //             self.setState({ show: true });
        //         }
        //     }

        //     xhr.open('get', `http://www.yangwenjie.net.cn/api/article/${id}`);
        //     xhr.send(null);
        // }

        // //  set leave hook
        // this.props.router.setRouteLeaveHook (
        //     this.props.route,
        //     this.routerWillLeave
        // )

        //  组件Mount时抛出异部Action，从服务器拉取数据
        this.props.dispatch(fetchArticleCreator());
    }

    render () {
        const { dispatch, content, display } = this.props;
        const classList = classNames({
            article: true,
            'article-hide': !display
        });

        return (
            <div className={ classList }>
                <Content content={ content } showLoading={ bindActionCreators(showLoadingCreator, dispatch)} />
                <button className="show-btn" style={{display: this.state.showPanel ? 'none' : 'block'}} onClick={ this.addCommentPanel.bind(this) }>查看评论</button>
                <div className="ds-thread" style={{display: this.state.showPanel ? 'block' : 'none'}}></div>
                <div style={{display: this.state.show ? 'block' : 'none'}}>
                    <Footer></Footer>
                </div>
            </div>
        );
    }

    //  添加多说评论面板
    addCommentPanel () {
        let script = document.createElement('script');
        let contentElem = this.refs.content;

        script.text = 'var duoshuoQuery = {short_name:"yangwenjie"};(function() {var ds = document.createElement("script");ds.type = "text/javascript";ds.async = true;ds.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//static.duoshuo.com/embed.js";ds.charset = "UTF-8";(document.getElementsByTagName("head")[0]|| document.getElementsByTagName("body")[0]).appendChild(ds);})();';
        contentElem.appendChild(script);
        this.setState({ showPanel: true });
    }

    //  路由离开函数钩子
    // routerWillLeave (nextLocation) {
    //     let script = document.head.getElementsByTagName('script')[0];
    //     let css = document.head.querySelectorAll('[href*="doushuo"]');

    //     if (script) {
    //         document.head.removeChild(script);
    //         console.log(css);
    //         document.body.removeChild(document.body.lastElementChild);
    //     }
    // }
}

export default connect(store => ({
    display: !store.showLoading,
    content: ''
}))(Article)
