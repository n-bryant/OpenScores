import React, {Component} from 'react';

class FChords extends Component {

  render() {
    return (
      <div className="f-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="F5">
          <img src="http://jguitar.com/images/chordshape/F-Major-F-1%2C3%2C3%2C2%2C1%2C1.png" alt="F5"/>
        </div>
        <div className="chord-option" data-val="Fs5">
          <img src="http://jguitar.com/images/chordshape/Fsharp-Major-Fsharp-2%2C4%2C4%2C3%2C2%2C2.png" alt="Fs5"/>
        </div>
        <div className="chord-option" data-val="Fm5">
          <img src="http://jguitar.com/images/chordshape/F-Minor-F-1%2C3%2C3%2C1%2C1%2C1.png" alt="Fm5"/>
        </div>
        <div className="chord-option" data-val="Fsm5">
          <img src="http://jguitar.com/images/chordshape/Fsharp-Minor-Fsharp-2%2C4%2C4%2C2%2C2%2C2.png" alt="Fsm5"/>
        </div>
        <div className="chord-option" data-val="F7">
          <img src="http://jguitar.com/images/chordshape/F-7th-F-1%2C3%2C1%2C2%2C1%2C1.png" alt="F7"/>
        </div>
        <div className="chord-option" data-val="Fs7">
          <img src="http://jguitar.com/images/chordshape/Fsharp-7th-Fsharp-2%2C4%2C2%2C3%2C2%2C2.png" alt="Fs7"/>
        </div>
        <div className="chord-option" data-val="FMaj7">
          <img src="http://jguitar.com/images/chordshape/F-Major%207th-F-1%2C3%2C2%2C2%2C1%2C1.png" alt="FMaj7"/>
        </div>
        <div className="chord-option" data-val="FsMaj7">
          <img src="http://jguitar.com/images/chordshape/Fsharp-Major%207th-Fsharp-2%2C4%2C3%2C3%2C2%2C2.png" alt="FsMaj7"/>
        </div>
        <div className="chord-option" data-val="Fmin7">
          <img src="http://jguitar.com/images/chordshape/F-Minor%207th-F-1%2C3%2C1%2C1%2C1%2C1.png" alt="Fmin7"/>
        </div>
        <div className="chord-option" data-val="Fsmin7">
          <img src="http://jguitar.com/images/chordshape/Fsharp-Minor%207th-Fsharp-2%2C4%2C2%2C2%2C2%2C2.png" alt="Fsmin7"/>
        </div>
      </div>
    );
  }
}

export default FChords;
