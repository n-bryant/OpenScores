import React, {Component} from 'react';
import Logo from '../profile/Logo';

class FormHeader extends Component {
    render() {
        return (
            <div className="main-form-header-container">
                <section className="form-header-container">
                    <Logo/>
                    <a href="#">
                        <p className="sign-up">Sign Up</p>
                    </a>
                </section>
            </div>
        );
    }
}

export default FormHeader;
