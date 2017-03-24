import React, {Component} from 'react';

class CChords extends Component {

  render() {
    return (
      <div className="c-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="C5">
          <img src="http://jguitar.com/images/chordshape/C-Major-C-x%2C3%2C2%2C0%2C1%2C0.png" alt="C5"/>
        </div>
        <div className="chord-option" data-val="Cs5">
          <img src="http://jguitar.com/images/chordshape/Csharp-Major-Csharp-x%2C4%2C3%2C1%2C2%2C1.png" alt="Cs5"/>
        </div>
        <div className="chord-option" data-val="Cm5">
          <img src="http://jguitar.com/images/chordshape/C-Minor-C-x%2C3%2C5%2C5%2C4%2C3.png" alt="Cm5"/>
        </div>
        <div className="chord-option" data-val="Csm5">
          <img src="http://jguitar.com/images/chordshape/Csharp-Minor-Csharp-x%2C4%2C6%2C6%2C5%2C4.png" alt="Csm5"/>
        </div>
        <div className="chord-option" data-val="C7">
          <img src="http://jguitar.com/images/chordshape/C-7th-C-x%2C3%2C5%2C3%2C5%2C3.png" alt="C7"/>
        </div>
        <div className="chord-option" data-val="Cs7">
          <img src="http://jguitar.com/images/chordshape/Csharp-7th-Csharp-x%2C4%2C6%2C4%2C6%2C4.png" alt="Cs7"/>
        </div>
        <div className="chord-option" data-val="CMaj7">
          <img src="http://jguitar.com/images/chordshape/C-Major%207th-C-x%2C3%2C5%2C4%2C5%2C3.png" alt="CMaj7"/>
        </div>
        <div className="chord-option" data-val="CsMaj7">
          <img src="http://jguitar.com/images/chordshape/Csharp-Major%207th-Csharp-x%2C4%2C6%2C5%2C6%2C4.png" alt="CsMaj7"/>
        </div>
        <div className="chord-option" data-val="Cmin7">
          <img src="http://jguitar.com/images/chordshape/C-Minor%207th-C-x%2C3%2C5%2C3%2C4%2C3.png" alt="Cmin7"/>
        </div>
        <div className="chord-option" data-val="Csmin7">
          <img src="http://jguitar.com/images/chordshape/Csharp-Minor%207th-Csharp-x%2C4%2C6%2C4%2C5%2C4.png" alt="Csmin7"/>
        </div>
      </div>
    );
  }
}

export default CChords;
