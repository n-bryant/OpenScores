import React, {Component} from 'react';

class MainHeader extends Component {
    render() {
        return (
            <div className="header-container">
                <section className="main-header-container">
                    <input className="search-comp" type="search" placeholder="Find Compositions..."></input>
                </section>
            </div>
        );
    }
}

export default MainHeader;
