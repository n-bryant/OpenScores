import React, {Component} from 'react';

class HeaderForm extends Component {
    render() {
        return (
            <div className="social-media-container is-centered">
                <section className="media-icons is-flex">
                    <a href="#">
                        <img className="twitter" src="https://cdn2.iconfinder.com/data/icons/social-media-free-9/32/twitter_social_media_logo-128.png" alt="twitter logo"></img>
                    </a>
                    <a href="#">
                        <img className="facebook" src="https://cdn2.iconfinder.com/data/icons/social-media-free-9/32/facebook_social_media_logo-128.png" alt="facebook logo"></img>
                    </a>
                    <a href="#">
                        <img className="instagram" src="https://cdn2.iconfinder.com/data/icons/social-media-free-9/32/instagram_social_media_logo-128.png" alt="instagram logo"></img>
                    </a>
                    <a href="#">
                        <img className="gitHub" src="https://cdn2.iconfinder.com/data/icons/social-media-free-9/32/github_social_media_logo-128.png" alt="github"></img>
                    </a>
                </section>
            </div>
        );
    }
}

export default HeaderForm;
