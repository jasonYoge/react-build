import React, { Component } from 'react';
require('../css/NavbarHeader.scss');

/**
 *  App component is top component of all.
 */
export default class NavbarHeader extends Component {
    render() {
        return (
            <div className="navbar-header">
                <img src="./img/profile.jpg" />
                <h2>杨雯杰</h2>
                <p>一个有梦想的Web前端待入门工程师</p>
            </div>
        );
    }
}
