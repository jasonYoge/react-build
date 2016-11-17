import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './NavbarHeader';
require('../css/Navbar.scss');

/**
 *  Navbar component is navbar on top of page.
 */
export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Header></Header>
                <ul className="navbar-link">
                    <li><Link to="/profile" activeClassName="nav-active"><i className="fa fa-pencil"></i>个人介绍</Link></li>
                    <li><Link to="/blog" activeClassName="nav-active"><i className="fa fa-paperclip"></i>博客</Link></li>
                    <li><Link to="/contact" activeClassName="nav-active"><i className="fa fa-link"></i>联系我</Link></li>
                </ul>
            </nav>
        );
    }
}
