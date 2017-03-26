import React, {Component} from 'react';
import Bf5 from '../../../images/Bf5.png';
import B5 from '../../../images/B5.png';
import Bfmin5 from '../../../images/Bfmin5.png';
import Bmin5 from '../../../images/Bmin5.png';
import Bf7 from '../../../images/Bf7.png';
import B7 from '../../../images/B7.png';
import BfMaj7 from '../../../images/BfMaj7.png';
import BMaj7 from '../../../images/BMaj7.png';
import Bfmin7 from '../../../images/Bfmin7.png';
import Bmin7 from '../../../images/Bmin7.png';


class BChords extends Component {

  render() {
    return (
      <div className="b-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="Bf5">
          <img src={Bf5} alt="Bf5"/>
        </div>
        <div className="chord-option" data-val="B5">
          <img src={B5} alt="B5"/>
        </div>
        <div className="chord-option" data-val="Bfmin5">
          <img src={Bfmin5} alt="Bfm5"/>
        </div>
        <div className="chord-option" data-val="Bmin5">
          <img src={Bmin5} alt="Bm5"/>
        </div>
        <div className="chord-option" data-val="Bf7">
          <img src={Bf7} alt="Bf7"/>
        </div>
        <div className="chord-option" data-val="B7">
          <img src={B7} alt="B7"/>
        </div>
        <div className="chord-option" data-val="BfMaj7">
          <img src={BfMaj7} alt="BfMaj7"/>
        </div>
        <div className="chord-option" data-val="BMaj7">
          <img src={BMaj7} alt="BMaj7"/>
        </div>
        <div className="chord-option" data-val="Bfmin7">
          <img src={Bfmin7} alt="Bfmin7"/>
        </div>
        <div className="chord-option" data-val="Bmin7">
          <img src={Bmin7} alt="Bmin7"/>
        </div>
      </div>
    );
  }
}

export default BChords;
