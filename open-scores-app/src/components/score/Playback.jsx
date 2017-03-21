import React, {Component} from 'react';
import Tone from 'tone';
import $ from 'jquery';
// import Interface from 'interface';
// import AudioContext from 'audio-context';

class Transport extends Component {
constructor(){
super();
  this.synth = new Tone.MonoSynth().toMaster();
  console.log(this.synth);
}

  playSound(event) {
    this.synth.triggerAttackRelease('C4', '4n', '8n');
    // console.log('in');
  }

  toggleToolBoxPosition(event) {
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
    <div className="Transport-controls is-flex">
      <div className="Transport-buttons">
        <button className="Transport stopBtn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122324.svg" alt="stop button"/>
        </button>
        <button className="Transport pauseBtn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122326.svg" alt="pause button"/>
        </button>
        <button ref={(playBtn) => this.playBtn = playBtn} className="Transport playBtn is-centered" id="Keyboard" onClick={this.playSound.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/122/122323.svg" alt="play button"/>
        </button>
        <button className="toggle-pos" onClick={this.toggleToolBoxPosition.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/122/122303.svg" alt="toggle toolbox view button"/>
        </button>
      </div>
      <div className="Transport-buttons">
        <button className="Transport to-beg-btn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122329.svg" alt="reverse to beginning"/>
        </button>
        <button className="Transport rev-btn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122327.svg" alt="reverse button"/>
        </button>
        <button className="Transport ff-btn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122328.svg" alt="fast-forward button"/>
        </button>
        <button className="Transport to-end-btn is-centered">
          <img src="https://image.flaticon.com/icons/svg/122/122330.svg" alt="fast-forward to end"/>
        </button>
      </div>
    </div>
    );
  }
}
export default Transport;
