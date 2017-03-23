import React, {Component} from 'react';

class EChords extends Component {

  render() {
    return (
      <div className="e-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="Ef5">
          <img src="http://jguitar.com/images/chordshape/Eb-Major-Eb-x%2C6%2C5%2C3%2C4%2C3.png" alt="Ef5"/>
        </div>
        <div className="chord-option" data-val="E5">
          <img src="http://jguitar.com/images/chordshape/E-Major-E-x%2C7%2C6%2C4%2C5%2C4.png" alt="E5"/>
        </div>
        <div className="chord-option" data-val="Efm5">
          <img src="http://jguitar.com/images/chordshape/Eb-Minor-Eb-x%2C6%2C4%2C3%2C4%2Cx.png" alt="Efm5"/>
        </div>
        <div className="chord-option" data-val="Em5">
          <img src="http://jguitar.com/images/chordshape/E-Minor-E-x%2C7%2C5%2C4%2C5%2Cx.png" alt="Em5"/>
        </div>
        <div className="chord-option" data-val="Ef7">
          <img src="http://jguitar.com/images/chordshape/Eb-7th-Eb-x%2C6%2C5%2C6%2C4%2Cx.png" alt="Ef7"/>
        </div>
        <div className="chord-option" data-val="E7">
          <img src="http://jguitar.com/images/chordshape/E-7th-E-x%2C7%2C6%2C7%2C5%2Cx.png" alt="E7"/>
        </div>
        <div className="chord-option" data-val="EfMaj7">
          <img src="http://jguitar.com/images/chordshape/Eb-Major%207th-Eb-x%2C6%2C5%2C3%2C3%2C6.png" alt="EfMaj7"/>
        </div>
        <div className="chord-option" data-val="EMaj7">
          <img src="http://jguitar.com/images/chordshape/E-Major%207th-E-x%2C7%2C6%2C4%2C4%2C4.png" alt="EMaj7"/>
        </div>
        <div className="chord-option" data-val="Efmin7">
          <img src="http://jguitar.com/images/chordshape/Eb-Minor%207th-Eb-x%2C6%2C4%2C6%2C4%2C6.png" alt="Efmin7"/>
        </div>
        <div className="chord-option" data-val="Emin7">
          <img src="http://jguitar.com/images/chordshape/E-Minor%207th-E-x%2C7%2C5%2C7%2C5%2C7.png" alt="Emin7"/>
        </div>
      </div>
    );
  }
}

export default EChords;
