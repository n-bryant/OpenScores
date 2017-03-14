import React, {Component} from 'react';
import base from '../base';
import Tone from 'tone';
import MainHeader from './MainHeader';
import MainSideBar from './MainSideBar';

//creates 4 instances of the Tone.Synth
const polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster();

class App extends Component {

  pauseChord() {
    document.querySelector('#chord').addEventListener('mouseup', function() {
      //unlike the other instruments, the notes need to be passed into triggerRelease
      polySynth.triggerRelease(['C4', 'E4', 'G4', 'B4'])
    });
  }

  playChord() {
    document.querySelector('#chord').addEventListener('mousedown', function() {
      //an array of notes can be passed into PolySynth
      polySynth.triggerAttack(['C4', 'E4', 'G4', 'B4'])
    });
  }

  render() {
    return (
      <div>
        <MainHeader/>
        <MainSideBar/>
        <p>Start</p>
        <button id="chord" onMouseDown={this.playChord} onMouseUp={this.pauseChord}>Tone Me, Bruh!</button>
      </div>
    );
  }
}

export default App;
