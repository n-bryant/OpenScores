import React, {Component} from 'react';
import Tone from 'tone';
import $ from 'jquery';

class Transport extends Component {
constructor(){
super();
  // Tone.Transport.bpm.value = 120;
  // this.started = false;
}

  playSound(event) {
    // console.log(Tone.Transport.state);
    // if (!this.started) {
    //   this.started = true;
    //   Tone.Transport.start();
    // }
  }

  stopSound(event) {
    // console.log(Tone.Transport.state);
    // if (this.started) {
      // Tone.Transport.stop();
      // this.started = false;
    // }
  }

  pauseSound(event) {
    // console.log(Tone.Transport.state);
    // if (this.started) {
    //   Tone.Transport.pause();
    //   this.started = false;
    // }
  }

render() {
  return (
    <div className="Transport-controls">
      <p className="playback-title is-centered">Playback</p>
      <div className="Transport-buttons is-flex">
        <button ref={(playBtn) => this.playBtn = playBtn} className="Transport playBtn is-centered" onClick={this.playSound.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/122/122323.svg" alt="play button"/>
        </button>
        <button ref={(pauseBtn) => this.pauseBtn = pauseBtn} className="Transport pauseBtn is-centered" onClick={this.pauseSound.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/122/122326.svg" alt="pause button"/>
        </button>
        <button ref={(stopBtn) => this.stopBtn = stopBtn} className="Transport stopBtn is-centered" onClick={this.stopSound.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/122/122324.svg" alt="stop button"/>
        </button>
      </div>
    </div>
    );
  }
}
export default Transport;
