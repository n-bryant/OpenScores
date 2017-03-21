import React, {Component} from 'react';
import Tone from 'tone';
import $ from 'jquery';
// import Interface from 'interface';
// import AudioContext from 'audio-context';

class Transport extends Component {
constructor(){
super();
  // this.synth = new Tone.Synth().toMaster();
  Tone.Transport.bpm.value = 120;
  this.started = false;
  Tone.Transport.schedule(function(time){
//time = sample accurate time of the event
    }, "1m");
  // console.log(this.bpmVal);


/////working!!
//   var synth = new Tone.MetalSynth().toMaster();
//
// function triggerSynth(time){
// 	synth.triggerAttackRelease('16n', time)
// }
//
// Tone.Transport.schedule(triggerSynth, 0);
// Tone.Transport.schedule(triggerSynth, '2*8t');
// Tone.Transport.schedule(triggerSynth, '4n + 8t');
// Tone.Transport.schedule(triggerSynth, '4n + 2*8t');
// Tone.Transport.schedule(triggerSynth, '0:2 + 8t');
// Tone.Transport.schedule(triggerSynth, '0:3 + 8t');
//
// Tone.Transport.loopEnd = '1m';
// Tone.Transport.loop = true;

var synth = new Tone.Synth().toMaster();

//pass in an array of events
var part = new Tone.Part(function(time, event){
	//the events will be given to the callback with the time they occur
	synth.triggerAttackRelease(event.note, event.dur, time)
}, [{ time : 0, note : 'C4', dur : '4n'},
	{ time : '8n', note : 'E4', dur : '8n'},
	{ time : '8n', note : 'E4', dur : '8n'},
	{ time : '2n', note : 'G4', dur : '16n'},
	{ time : '2n + 8t', note : 'B4', dur : '4n'}]);

//start the part at the beginning of the Transport's timeline
part.start(0);

//loop the part 3 times
part.loop = 3;
part.loopEnd = '1m';

}


  playSound(event) {
    // console.log('in');
    console.log(Tone.Transport.bpm.value);


    if (!this.started) {
      this.started = true;
      Tone.Transport.start('+0.1');
    }
    // Tone.Transport.loop = true;
		// Tone.Transport.loopStart = "4m";
		// Tone.Transport.loopEnd = "8m";
  }

  stopSound(event) {
    if (this.started) {
      Tone.Transport.stop();
      this.started = false;
    }
  }
  pauseSound(event) {
    if (this.started) {
      Tone.Transport.pause();
      this.started = false;
    }
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
        <button ref={(stopBtn) => this.stopBtn = stopBtn} className="Transport stopBtn is-centered" onClick={this.stopSound.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/122/122324.svg" alt="stop button"/>
        </button>
        <button ref={(pauseBtn) => this.pauseBtn = pauseBtn} className="Transport pauseBtn is-centered" onClick={this.pauseSound.bind(this)}>
          <img src="https://image.flaticon.com/icons/svg/122/122326.svg" alt="pause button"/>
        </button>
        <button ref={(playBtn) => this.playBtn = playBtn} className="Transport playBtn is-centered" onClick={this.playSound.bind(this)}>
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
