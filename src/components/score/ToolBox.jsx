import React, {Component} from 'react';
import Transport from './Transport';
import base from '../../base';

class ToolBox extends Component {
  logout() {
    base.unauth();
    // this.setState({ uid: null});
    window.location.href = '/';
  }

  toggleToolBoxPosition(event) {
    const header = document.querySelector('header');
    const toolBox = document.querySelector('.tool-box');
    const scoreWrapper = document.querySelector('.score-wrapper');
    const inviteBtn = document.querySelector('.invite-btn');
    const chatToggle = document.querySelector('.chat-toggle');
    if (toolBox.classList.contains('horizontal')) {
      toolBox.classList.remove('horizontal');
      toolBox.classList.add('vertical');
      scoreWrapper.classList.add('vertical');
      header.classList.add('vertical');
      inviteBtn.classList.add('vertical');
      chatToggle.classList.add('vertical');
    } else if (toolBox.classList.contains('vertical')) {
      header.classList.remove('vertical');
      toolBox.classList.remove('vertical');
      scoreWrapper.classList.remove('vertical');
      inviteBtn.classList.remove('vertical');
      chatToggle.classList.remove('vertical');
      toolBox.classList.add('horizontal');
    }
  }

  render() {
    const logout = <button className="logout-btn" onClick={this.logout}>Log Out!</button>
    return (
      <div>
        <div className="tool-box vertical is-flex">
          <button className="toggle-pos" onClick={this.toggleToolBoxPosition.bind(this)}>
            <img src="https://image.flaticon.com/icons/svg/122/122303.svg" alt="toggle toolbox view button"/>
          </button>
          <section className="notation-selectors is-flex">
            <Transport/>
            <div className="note-lengths-container selectors is-centered">
              <h3>Measure</h3>
              <div className="options-wrapper is-flex">
                <button className="icon is-centered add-measure-btn"><img src="https://image.flaticon.com/icons/svg/7/7632.svg" alt="add measure"/></button>
                <button className="icon toggle-clef-btn is-centered"><img src="" alt="clef"/></button>
                <button className="icon time-sig-btn is-centered">4/4</button>
                <div className="time-options-wrapper is-hidden">
                  <div className="exit-times-btn">X</div>
                  <div className="time-options-container is-flex">
                    <div className="time-option" data-count="2" data-val="4">
                      <p>2/4</p>
                    </div>
                    <div className="time-option" data-count="3" data-val="4">
                      <p>3/4</p>
                      </div>
                    <div className="time-option" data-count="4" data-val="4">
                      <p>4/4</p>
                    </div>
                    <div className="time-option" data-count="6" data-val="8">
                      <p>6/8</p>
                    </div>
                  </div>
                </div>
                <button className="icon key-sig-btn is-centered">key</button>
              </div>
            </div>
            <div className="note-lengths-container selectors is-centered">
              <h3>Notes</h3>
              <div className="options-wrapper is-flex">
                <button className="icon note-option is-centered" data-val="w"><img src="https://image.flaticon.com/icons/svg/122/122350.svg" alt="whole note"/></button>
                <button className="icon note-option is-centered" data-val="h"><img src="https://image.flaticon.com/icons/svg/122/122351.svg" alt="half note"/></button>
                <button className="icon note-option is-centered" data-val="q"><img src="https://image.flaticon.com/icons/svg/122/122352.svg" alt="quarter note"/></button>
                <button className="icon note-option is-centered" data-val="8"><img src="https://image.flaticon.com/icons/svg/122/122321.svg" alt="eighth note"/></button>
                <button className="icon note-option is-centered" data-val="16"><img src="https://image.flaticon.com/icons/svg/122/122353.svg" alt="sixteenth note"/></button>
                <button className="icon chords-btn is-centered"><img src="http://www.midnightmusic.com.au/wp-content/uploads/2013/08/Generic-power-chord-on-E-string.png" alt="chord"/></button>
              </div>
            </div>
            <div className="rest-lengths-container selectors is-centered">
              <h3>Rests</h3>
              <div className="options-wrapper is-flex">
                <button className="icon note-option is-centered" data-val="wr"><img src="https://image.flaticon.com/icons/svg/125/125053.svg" alt="whole rest"/></button>
                <button className="icon note-option is-centered" data-val="hr"><img src="https://image.flaticon.com/icons/svg/125/125052.svg" alt="half rest"/></button>
                <button className="icon note-option is-centered" data-val="qr"><img src="https://image.flaticon.com/icons/svg/125/125054.svg" alt="quarter rest"/></button>
                <button className="icon note-option is-centered" data-val="8r"><img src="https://image.flaticon.com/icons/svg/125/125055.svg" alt="eighth rest"/></button>
                <button className="icon note-option is-centered" data-val="16r"><img src="https://cdn3.iconfinder.com/data/icons/music-notes-symbols/512/Icon_19-128.png" alt="sixteenth rest"/></button>
              </div>
            </div>
            <div className="accidentals-container selectors is-centered">
              <h3>Modifiers</h3>
              <div className="options-wrapper is-flex">
                <button className="icon acc-option is-centered" data-val="b"><img src="https://image.flaticon.com/icons/svg/125/125090.svg" alt="flat"/></button>
                <button className="icon acc-option is-centered" data-val="n"><img src="https://image.flaticon.com/icons/svg/125/125085.svg" alt="natural"/></button>
                <button className="icon acc-option is-centered" data-val="#"><img src="https://image.flaticon.com/icons/svg/125/125088.svg" alt="sharp"/></button>
                <button className="icon tie-btn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125125.svg" alt="tie"/></button>
                <button className="icon dot-btn is-centered">•</button>
              </div>
            </div>
            {/*
              <div className="dynamics-container selectors is-centered">
                <h3>Dynamics</h3>
                <div className="options-wrapper is-flex">
                  <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125066.svg" alt="note"/></button>
                  <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125058.svg" alt="note"/></button>
                  <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125059.svg" alt="note"/></button>
                  <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125060.svg" alt="note"/></button>
                  <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125062.svg" alt="note"/></button>
                  <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125063.svg" alt="note"/></button>
                  <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125064.svg" alt="note"/></button>
                  <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125067.svg" alt="note"/></button>
                </div>
              </div>
            */}
          </section>
        </div>
      </div>
    );
  }
}

export default ToolBox;
