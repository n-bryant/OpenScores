import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (
            <div className="main-logo-container">
                <section className="logo-container">
                    <img className="logo-image" src="https://image.flaticon.com/icons/svg/118/118328.svg"></img>
                    <p className="logo-text">OpenScores</p>
                </section>
            </div>
        );
    }
}

export default Logo;
