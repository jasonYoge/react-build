import React, { Component } from 'react';
require('../css/BlogHeader.scss');

/**
 *  App component is top component of all.
 */
const BlogHeader = () => (
    <header className="blog-header">
        <h2>关于我的博客</h2>
        <div className="blog-header-img">
        </div>
        <p>这个个人博客，主要目的是记录自己平时学习当中所遇到的一些问题。把这些问题归纳总结，方便以后自己查阅。</p>
    </header>
);

export default BlogHeader;
