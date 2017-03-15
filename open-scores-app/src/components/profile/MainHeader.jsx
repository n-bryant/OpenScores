import React, {Component} from 'react';

class MainHeader extends Component {
    render() {
        return (
            <div className="header-container">
                <section className="main-header-container">
                    <h1>OpenScorce</h1>
                    <input type="button" value="NewComp" className="newThing"></input>
                    <input type="button" value="SavedComp" className="newThing"></input>
                    <input type="button" value="FriendsComp" className="newThing"></input>
                </section>
            </div>
        );
    }
}

export default MainHeader;
