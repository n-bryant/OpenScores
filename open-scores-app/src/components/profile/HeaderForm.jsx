import React, {Component} from 'react';

class HeaderForm extends Component {
    render() {
        return (
            <div className="social-media-container">
                <section className="media-icons">
                    <a href="#">
                        <img className="twitter" src="https://cdn2.iconfinder.com/data/icons/social-media-free-9/32/twitter_social_media_logo-128.png"></img>
                    </a>
                    <a href="#">
                        <img ClassName="facebook" src="https://cdn2.iconfinder.com/data/icons/social-media-free-9/32/facebook_social_media_logo-128.png"></img>
                    </a>
                    <a href="#">
                        <img ClassName="instagram" src="https://cdn2.iconfinder.com/data/icons/social-media-free-9/32/instagram_social_media_logo-128.png"></img>
                    </a>
                    <a href="#">
                        <img ClassName="gitHub" src="https://cdn2.iconfinder.com/data/icons/social-media-free-9/32/github_social_media_logo-128.png"></img>
                    </a>
                </section>
            </div>
        );
    }
}

export default HeaderForm;
