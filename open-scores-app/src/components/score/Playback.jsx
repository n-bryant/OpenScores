import React, {Component} from 'react';

class Playback extends Component {
  toggleToolBoxPosition(event) {
    // const toggleBtn = document.querySelector('.toggle-pos');
    const toolBox = document.querySelector('.tool-box');

    if (toolBox.classList.contains('horizontal')) {
      toolBox.classList.remove('horizontal');
      toolBox.classList.add('vertical');
    } else if (toolBox.classList.contains('vertical')) {
      toolBox.classList.remove('vertical');
      toolBox.classList.add('horizontal');
    }
  }

render() {
  return (
    <div className="playback-controls is-flex">
      <div className="playback-buttons">
        <button className="playback stopBtn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122324.svg" alt="stop button"/>
        </button>
        <button className="playback pauseBtn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122326.svg" alt="pause button"/>
        </button>
        <button className="playback playBtn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122323.svg" alt="play button"/>
        </button>
        <button className="toggle-pos" onClick={this.toggleToolBoxPosition.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/122/122303.svg" alt="toggle toolbox view button"/>
        </button>
      </div>
      <div className="playback-buttons">
        <button className="playback to-beg-btn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122329.svg" alt="reverse to beginning"/>
        </button>
        <button className="playback rev-btn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122327.svg" alt="reverse button"/>
        </button>
        <button className="playback ff-btn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122328.svg" alt="fast-forward button"/>
        </button>
        <button className="playback to-end-btn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122330.svg" alt="fast-forward to end"/>
        </button>
      </div>
    </div>
    );
  }
}
export default Playback;
