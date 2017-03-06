import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
require('../css/ProfileSkill.scss');

/**
 *  Profile component is index page.
 */
class ProfileSkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startPos: 0,
            index: 0,
            width: 0
        }
    }

    render () {
        let pieClass30 = classNames({
            'pie': true,
            'move-to-30': this.props.showSkill
        });
        let pieClass40 = classNames({
            'pie': true,
            'move-to-40': this.props.showSkill
        });
        let pieClass10 = classNames({
            'pie': true,
            'move-to-10': this.props.showSkill
        });

        return (
            <section className="profile-skill">
                <h3 className="profile-skill-title">前端技能</h3>
                <ul ref="list" style={{ transform: `translateX(${this.state.index * -(this.state.width)}px)`}} className="pie-list" onTouchEnd={this.setDirection.bind(this)} onTouchStart={this.setOrigin.bind(this) }>
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

    // shouldComponentUpdate(nextProps, nextState) {
    //     // if (nextState.)
    // }
    componentDidMount() {
        let list = this.refs.list;
        let width = list.offsetWidth / 4;
        console.log(width);
        this.setState({ width: width });
    }

    setOrigin (event) {
        this.setState({ startPos: event.touches[0].clientX });
    }

    setDirection (event) {
        let start = this.state.startPos;
        let index = this.state.index;
        let dir = event.changedTouches[0].clientX - start;

        if (dir < 0) {
            index++;
            if (index === 4) index = 3;
            this.setState({ index: index });
        } else if (dir>0) {
            index--;
            if (index === -1) index = 0;
            this.setState({ index: index });
        }
    }
}

ProfileSkill.propTypes = {
    showSkill: PropTypes.bool.isRequired
}

export default ProfileSkill;
