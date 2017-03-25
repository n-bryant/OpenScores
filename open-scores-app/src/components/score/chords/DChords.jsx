import React, {Component} from 'react';
import Df5 from '../../../images/Df5.png';
import D5 from '../../../images/D5.png';
import Ds5 from '../../../images/Ds5.png';
import Dfm5 from '../../../images/Dfm5.png';
import Dm5 from '../../../images/Dm5.png';
import Dsm5 from '../../../images/Dsm5.png';
import Df7 from '../../../images/Df7.png';
import D7 from '../../../images/D7.png';
import Ds7 from '../../../images/Ds7.png';
import DfMaj7 from '../../../images/DfMaj7.png';
import DMaj7 from '../../../images/DMaj7.png';
import DsMaj7 from '../../../images/DsMaj7.png';
import Dfmin7 from '../../../images/Dfmin7.png';
import Dmin7 from '../../../images/Dmin7.png';
import Dsmin7 from '../../../images/Dsmin7.png';

class DChords extends Component {
  render() {
    return (
      <div className="d-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="Df5">
          <img src={Df5} alt="Df5"/>
        </div>
        <div className="chord-option" data-val="D5">
          <img src={D5} alt="D5"/>
        </div>
        <div className="chord-option" data-val="Ds5">
          <img src={Ds5} alt="Ds5"/>
        </div>
        <div className="chord-option" data-val="Dfm5">
          <img src={Dfm5} alt="Dfm5"/>
        </div>
        <div className="chord-option" data-val="Dm5">
          <img src={Dm5} alt="Dm5"/>
        </div>
        <div className="chord-option" data-val="Dsm5">
          <img src={Dsm5} alt="Dsm5"/>
        </div>
        <div className="chord-option" data-val="Df7">
          <img src={Df7} alt="Df7"/>
        </div>
        <div className="chord-option" data-val="D7">
          <img src={D7} alt="D7"/>
        </div>
        <div className="chord-option" data-val="Ds7">
          <img src={Ds7} alt="Ds7"/>
        </div>
        <div className="chord-option" data-val="DfMaj7">
          <img src={DfMaj7} alt="DfMaj7"/>
        </div>
        <div className="chord-option" data-val="DMaj7">
          <img src={DMaj7} alt="DMaj7"/>
        </div>
        <div className="chord-option" data-val="DsMaj7">
          <img src={DsMaj7} alt="DsMaj7"/>
        </div>
        <div className="chord-option" data-val="Dfmin7">
          <img src={Dfmin7} alt="Dfmin7"/>
        </div>
        <div className="chord-option" data-val="Dmin7">
          <img src={Dmin7} alt="Dmin7"/>
        </div>
        <div className="chord-option" data-val="Dsmin7">
          <img src={Dsmin7} alt="Dsmin7"/>
        </div>
      </div>
    );
  }
}

export default DChords;
