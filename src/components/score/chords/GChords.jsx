import React, {Component} from 'react';
import Gf5 from '../../../images/Gf5.png';
import G5 from '../../../images/G5.png';
import Gs5 from '../../../images/Gs5.png';
import Gfm5 from '../../../images/Gfm5.png';
import Gm5 from '../../../images/Gm5.png';
import Gsm5 from '../../../images/Gsm5.png';
import Gf7 from '../../../images/Gf7.png';
import G7 from '../../../images/G7.png';
import Gs7 from '../../../images/Gs7.png';
import GfMaj7 from '../../../images/GfMaj7.png';
import GMaj7 from '../../../images/GMaj7.png';
import GsMaj7 from '../../../images/GsMaj7.png';
import Gfmin7 from '../../../images/Gfmin7.png';
import Gmin7 from '../../../images/Gmin7.png';
import Gsmin7 from '../../../images/Gsmin7.png';

class GChords extends Component {
  render() {
    return (
      <div className="g-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="Gf5">
          <img src={Gf5} alt="Gf5"/>
        </div>
        <div className="chord-option" data-val="G5">
          <img src={G5} alt="G5"/>
        </div>
        <div className="chord-option" data-val="Gs5">
          <img src={Gs5} alt="Gs5"/>
        </div>
        <div className="chord-option" data-val="Gfm5">
          <img src={Gfm5} alt="Gfm5"/>
        </div>
        <div className="chord-option" data-val="Gm5">
          <img src={Gm5} alt="Gm5"/>
        </div>
        <div className="chord-option" data-val="Gsm5">
          <img src={Gsm5} alt="Gsm5"/>
        </div>
        <div className="chord-option" data-val="Gf7">
          <img src={Gf7} alt="Gf7"/>
        </div>
        <div className="chord-option" data-val="G7">
          <img src={G7} alt="G7"/>
        </div>
        <div className="chord-option" data-val="Gs7">
          <img src={Gs7} alt="Gs7"/>
        </div>
        <div className="chord-option" data-val="GfMaj7">
          <img src={GfMaj7} alt="GfMaj7"/>
        </div>
        <div className="chord-option" data-val="GMaj7">
          <img src={GMaj7} alt="GMaj7"/>
        </div>
        <div className="chord-option" data-val="GsMaj7">
          <img src={GsMaj7} alt="GsMaj7"/>
        </div>
        <div className="chord-option" data-val="Gfmin7">
          <img src={Gfmin7} alt="Gfmin7"/>
        </div>
        <div className="chord-option" data-val="Gmin7">
          <img src={Gmin7} alt="Gmin7"/>
        </div>
        <div className="chord-option" data-val="Gsmin7">
          <img src={Gsmin7} alt="Gsmin7"/>
        </div>
      </div>
    );
  }
}

export default GChords;
