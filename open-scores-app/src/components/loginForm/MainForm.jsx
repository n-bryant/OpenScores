import React, {Component} from 'react';
import Login from './Login';

class MainForm extends Component {
    render() {
        return (
            <div className="main-form-container">
                <section className="main-form">
                    <Login/>
                </section>
            </div>
        );
    }
}

export default MainForm;
