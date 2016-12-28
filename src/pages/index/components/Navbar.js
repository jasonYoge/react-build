import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './NavbarHeader';
require('../css/Navbar.scss');

/**
 *  Navbar component is navbar on top of page.
 */
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    render() {
        return (
            <nav>
                <Header></Header>
                <ul onClick={this.onLinkGroupClick.bind(this)} className={!this.state.active ? 'navbar-link' : 'navbar-link active'}>
                    <li><Link to="/profile" activeClassName="nav-active"><i className="fa fa-pencil"></i>个人介绍</Link></li>
                    <li><Link to="/blog" activeClassName="nav-active"><i className="fa fa-paperclip"></i>博客</Link></li>
                    <li><Link to="/contact" activeClassName="nav-active"><i className="fa fa-link"></i>联系我</Link></li>
                </ul>
                <a className="link-btn" onClick={this.onLinkBtnClick.bind(this)}><i className="fa fa-bars"></i></a>
            </nav>
        );
    }

    onLinkBtnClick () {
        if (this.state.active) {
            this.setState({active: false});
        } else {
            this.setState({active: true});
        }
    }

    onLinkGroupClick () {
        if (window.offsetWidth > 825) {
            return;
        }
        if (this.state.active) {
            this.setState({active: false});
        } else {
            this.setState({active: true});
        }
    }
}
