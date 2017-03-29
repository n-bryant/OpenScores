import React, {Component} from 'react';
import HeaderForm from './HeaderForm';
import Logo from './Logo';

class MainHeader extends Component {
    render() {
        return (
            <div className="header-container">
                <section className="main-header-container is-flex">
                    <Logo/>
                    {/*}<input className="search-comp" type="search" placeholder="Find Compositions..."></input>*/}
                    <HeaderForm/>
                </section>
            </div>
        );
    }
}

export default MainHeader;
