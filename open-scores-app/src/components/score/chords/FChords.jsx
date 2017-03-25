import React, {Component} from 'react';
import F5 from '../../../images/F5.png';
import Fs5 from '../../../images/Fs5.png';
import Fm5 from '../../../images/Fm5.png';
import Fsm5 from '../../../images/Fsm5.png';
import F7 from '../../../images/F7.png';
import Fs7 from '../../../images/Fs7.png';
import FMaj7 from '../../../images/FMaj7.png';
import FsMaj7 from '../../../images/FsMaj7.png';
import Fmin7 from '../../../images/Fmin7.png';
import Fsmin7 from '../../../images/Fsmin7.png';

class FChords extends Component {

  render() {
    return (
      <div className="f-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="F5">
          <img src={F5} alt="F5"/>
        </div>
        <div className="chord-option" data-val="Fs5">
          <img src={Fs5} alt="Fs5"/>
        </div>
        <div className="chord-option" data-val="Fm5">
          <img src={Fm5} alt="Fm5"/>
        </div>
        <div className="chord-option" data-val="Fsm5">
          <img src={Fsm5} alt="Fsm5"/>
        </div>
        <div className="chord-option" data-val="F7">
          <img src={F7} alt="F7"/>
        </div>
        <div className="chord-option" data-val="Fs7">
          <img src={Fs7} alt="Fs7"/>
        </div>
        <div className="chord-option" data-val="FMaj7">
          <img src={FMaj7} alt="FMaj7"/>
        </div>
        <div className="chord-option" data-val="FsMaj7">
          <img src={FsMaj7} alt="FsMaj7"/>
        </div>
        <div className="chord-option" data-val="Fmin7">
          <img src={Fmin7} alt="Fmin7"/>
        </div>
        <div className="chord-option" data-val="Fsmin7">
          <img src={Fsmin7} alt="Fsmin7"/>
        </div>
      </div>
    );
  }
}

export default FChords;
