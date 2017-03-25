import React, {Component} from 'react';
import Ef5 from '../../../images/Ef5.png';
import E5 from '../../../images/E5.png';
import Efm5 from '../../../images/Efm5.png';
import Em5 from '../../../images/Em5.png';
import Ef7 from '../../../images/Ef7.png';
import E7 from '../../../images/E7.png';
import EfMaj7 from '../../../images/EfMaj7.png';
import EMaj7 from '../../../images/EMaj7.png';
import Efmin7 from '../../../images/Efmin7.png';
import Emin7 from '../../../images/Emin7.png';


class EChords extends Component {

  render() {
    return (
      <div className="e-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="Ef5">
          <img src={Ef5} alt="Ef5"/>
        </div>
        <div className="chord-option" data-val="E5">
          <img src={E5} alt="E5"/>
        </div>
        <div className="chord-option" data-val="Efm5">
          <img src={Efm5} alt="Efm5"/>
        </div>
        <div className="chord-option" data-val="Em5">
          <img src={Em5} alt="Em5"/>
        </div>
        <div className="chord-option" data-val="Ef7">
          <img src={Ef7} alt="Ef7"/>
        </div>
        <div className="chord-option" data-val="E7">
          <img src={E7} alt="E7"/>
        </div>
        <div className="chord-option" data-val="EfMaj7">
          <img src={EfMaj7} alt="EfMaj7"/>
        </div>
        <div className="chord-option" data-val="EMaj7">
          <img src={EMaj7} alt="EMaj7"/>
        </div>
        <div className="chord-option" data-val="Efmin7">
          <img src={Efmin7} alt="Efmin7"/>
        </div>
        <div className="chord-option" data-val="Emin7">
          <img src={Emin7} alt="Emin7"/>
        </div>
      </div>
    );
  }
}

export default EChords;
