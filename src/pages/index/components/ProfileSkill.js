import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
require('../css/ProfileSkill.scss');

/**
 *  Profile component is index page.
 */
const ProfileSkill = props => {
    let pieClass30 = classNames({
        'pie': true,
        'move-to-30': props.showSkill
    });
    let pieClass40 = classNames({
        'pie': true,
        'move-to-40': props.showSkill
    });
    let pieClass10 = classNames({
        'pie': true,
        'move-to-10': props.showSkill
    });

    return (
        <section className="profile-skill">
            <h3>前端技能</h3>
            <ul className="pie-list">
                <li><div className={pieClass30}></div>
                        <span className="finished">30%</span>
                        <h4>Javascript</h4>
                </li>
                <li><div className={pieClass40}></div>
                        <span className="finished">40%</span>
                        <h4>HTML</h4>
                </li>
                <li><div className={pieClass40}></div>
                        <span className="finished">40%</span>
                        <h4>CSS</h4>
                </li>
                <li><div className={pieClass10}></div>
                        <span className="finished">10%</span>
                        <h4>Node.js</h4>
                </li>
            </ul>
        </section>
    );
}

ProfileSkill.propTypes = {
    showSkill: PropTypes.bool.isRequired
}

export default ProfileSkill;
