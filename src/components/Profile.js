import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Header from './ProfileHeader';
import Intro from './ProfileIntro';
import Skill from './ProfileSkill';
import Footer from './Footer';
require('../css/Profile.scss');

/**
 *  Profile component is index page.
 */
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSkill: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    render() {
        let classList = classNames({
            profile: true,
            'profile-hide': !this.props.display
        });

        return (
            <div className={ classList } onScroll={ this.handleScroll }>
                <Header></Header>
                <Intro></Intro>
                <Skill showSkill={ this.state.showSkill }></Skill>
                <Footer></Footer>
            </div>
        );
    }

    componentWillUnmount () {
        console.log('profile will unmount');
    }

    handleScroll(event) {
        if (event.target.scrollTop > 320 && !this.state.showSkill) {
            this.setState({ showSkill: true });
        } else {
            return;
        }
    }
}

export default connect((state) => ({
    display: !state.showLoading
}))(Profile)
