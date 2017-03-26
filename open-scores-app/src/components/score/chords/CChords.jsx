import React, {Component} from 'react';
import C5 from '../../../images/C5.png';
import Cs5 from '../../../images/Cs5.png';
import Cm5 from '../../../images/Cm5.png';
import Csm5 from '../../../images/Csm5.png';
import C7 from '../../../images/C7.png';
import Cs7 from '../../../images/Cs7.png';
import CMaj7 from '../../../images/CMaj7.png';
import CsMaj7 from '../../../images/CsMaj7.png';
import Cmin7 from '../../../images/Cmin7.png';
import Csmin7 from '../../../images/Csmin7.png';

class CChords extends Component {

  render() {
    return (
      <div className="c-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="C5">
          <img src={C5} alt="C5"/>
        </div>
        <div className="chord-option" data-val="Cs5">
          <img src={Cs5} alt="Cs5"/>
        </div>
        <div className="chord-option" data-val="Cm5">
          <img src={Cm5} alt="Cm5"/>
        </div>
        <div className="chord-option" data-val="Csm5">
          <img src={Csm5} alt="Csm5"/>
        </div>
        <div className="chord-option" data-val="C7">
          <img src={C7} alt="C7"/>
        </div>
        <div className="chord-option" data-val="Cs7">
          <img src={Cs7} alt="Cs7"/>
        </div>
        <div className="chord-option" data-val="CMaj7">
          <img src={CMaj7} alt="CMaj7"/>
        </div>
        <div className="chord-option" data-val="CsMaj7">
          <img src={CsMaj7} alt="CsMaj7"/>
        </div>
        <div className="chord-option" data-val="Cmin7">
          <img src={Cmin7} alt="Cmin7"/>
        </div>
        <div className="chord-option" data-val="Csmin7">
          <img src={Csmin7} alt="Csmin7"/>
        </div>
      </div>
    );
  }
}

export default CChords;
