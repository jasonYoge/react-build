import React, { Component } from 'react';
import Header from './ProfileHeader';
import Intro from './ProfileIntro';
import Skill from './ProfileSkill';
import Footer from './Footer';
require('../css/Profile.scss');

/**
 *  Profile component is index page.
 */
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSkill: false,
        }
    }

    render() {
        return (
            <div className='profile' onScroll={this.handleScroll.bind(this)}>
                <Header></Header>
                <Intro></Intro>
                <Skill showSkill={ this.state.showSkill }></Skill>
                <Footer></Footer>
            </div>
        );
    }

    handleScroll(event) {
        if (event.target.scrollTop > 320 && !this.state.showSkill) {
            this.setState({ showSkill: true });
        } else {
            return;
        }
    }
}
