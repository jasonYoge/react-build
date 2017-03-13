import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import marked from 'marked';

require('../css/ArticleContent.scss');

export default class ArticleContent extends Component {
    constructor(props) {
        super(props);

        initMarkDown();
    }

    shouldComponentUpdate (nextProp, nextState) {
        if (nextProp.content.length !== 0) {

            //  获取DOM节点，修改内容
            const domNode = findDOMNode(this.refs.content);
            const content = marked(nextProp.content);

            if (content.length !== 0)
                domNode.innerHTML = content;

            //  预留时间渲染页面
            setTimeout(() => {
                this.props.showLoading(false);
            }, 1000);
            return true;
        }
        return false;
    }

    render () {
        return (<div ref="content" className="content"></div>);
    }
}

function initMarkDown () {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: true,
      sanitize: true,
      smartLists: true,
      smartypants: true,
      highlight (code) {
        return require('highlight.js').highlightAuto(code).value
      }
    });
}

ArticleContent.propTypes = {
    content: PropTypes.string.isRequired,
    showLoading: PropTypes.func.isRequired
}
