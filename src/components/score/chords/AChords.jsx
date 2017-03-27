import React, {Component} from 'react';
import Af5 from '../../../images/Af5.png';
import A5 from '../../../images/A5.png';
import As5 from '../../../images/As5.png';
import Afm5 from '../../../images/Afm5.png';
import Am5 from '../../../images/Am5.png';
import Asm5 from '../../../images/Asm5.png';
import Af7 from '../../../images/Af7.png';
import A7 from '../../../images/A7.png';
import As7 from '../../../images/As7.png';
import AfMaj7 from '../../../images/AfMaj7.png';
import AMaj7 from '../../../images/AMaj7.png';
import AsMaj7 from '../../../images/AsMaj7.png';
import Afmin7 from '../../../images/Afmin7.png';
import Amin7 from '../../../images/Amin7.png';
import Asmin7 from '../../../images/Asmin7.png';

class AChords extends Component {
  render() {
    return (
      <div className="a-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="Af5">
          <img src={Af5} alt="Af5"/>
        </div>
        <div className="chord-option" data-val="A5">
          <img src={A5} alt="A5"/>
        </div>
        <div className="chord-option" data-val="As5">
          <img src={As5} alt="As5"/>
        </div>
        <div className="chord-option" data-val="Afm5">
          <img src={Afm5} alt="Afm5"/>
        </div>
        <div className="chord-option" data-val="Am5">
          <img src={Am5} alt="Am5"/>
        </div>
        <div className="chord-option" data-val="Asm5">
          <img src={Asm5} alt="Asm5"/>
        </div>
        <div className="chord-option" data-val="Af7">
          <img src={Af7} alt="Af7"/>
        </div>
        <div className="chord-option" data-val="A7">
          <img src={A7} alt="A7"/>
        </div>
        <div className="chord-option" data-val="As7">
          <img src={As7} alt="As7"/>
        </div>
        <div className="chord-option" data-val="AfMaj7">
          <img src={AfMaj7} alt="AfMaj7"/>
        </div>
        <div className="chord-option" data-val="AMaj7">
          <img src={AMaj7} alt="AMaj7"/>
        </div>
        <div className="chord-option" data-val="AsMaj7">
          <img src={AsMaj7} alt="AsMaj7"/>
        </div>
        <div className="chord-option" data-val="Afmin7">
          <img src={Afmin7} alt="Afmin7"/>
        </div>
        <div className="chord-option" data-val="Amin7">
          <img src={Amin7} alt="Amin7"/>
        </div>
        <div className="chord-option" data-val="Asmin7">
          <img src={Asmin7} alt="Asmin7"/>
        </div>
      </div>
    );
  }
}

export default AChords;
