import React, {Component} from 'react';

class BChords extends Component {

  render() {
    return (
      <div className="b-chords chords-wrapper is-flex is-hidden">
        <div className="chord-option" data-val="Bf5">
          <img src="http://jguitar.com/images/chordshape/Bb-Major-Bb-6%2C8%2C8%2C7%2C6%2C6.png" alt="Bf5"/>
        </div>
        <div className="chord-option" data-val="B5">
          <img src="http://jguitar.com/images/chordshape/B-Major-B-7%2C9%2C9%2C8%2C7%2C7.png" alt="B5"/>
        </div>
        <div className="chord-option" data-val="Bfm5">
          <img src="http://jguitar.com/images/chordshape/Bb-Minor-Bb-6%2C8%2C8%2C6%2C6%2C6.png" alt="Bfm5"/>
        </div>
        <div className="chord-option" data-val="Bm5">
          <img src="http://jguitar.com/images/chordshape/B-Minor-B-7%2C9%2C9%2C7%2C7%2C7.png" alt="Bm5"/>
        </div>
        <div className="chord-option" data-val="Bf7">
          <img src="http://jguitar.com/images/chordshape/Bb-7th-Bb-6%2C8%2C6%2C7%2C6%2C6.png" alt="Bf7"/>
        </div>
        <div className="chord-option" data-val="B7">
          <img src="http://jguitar.com/images/chordshape/B-7th-B-7%2C9%2C7%2C8%2C7%2C7.png" alt="B7"/>
        </div>
        <div className="chord-option" data-val="BfMaj7">
          <img src="http://jguitar.com/images/chordshape/Bb-Major%207th-Bb-6%2C8%2C7%2C7%2C6%2C6.png" alt="BfMaj7"/>
        </div>
        <div className="chord-option" data-val="BMaj7">
          <img src="http://jguitar.com/images/chordshape/B-Major%207th-B-7%2C9%2C8%2C8%2C7%2C7.png" alt="BMaj7"/>
        </div>
        <div className="chord-option" data-val="Bfmin7">
          <img src="http://jguitar.com/images/chordshape/Bb-Minor%207th-Bb-6%2C8%2C6%2C6%2C6%2C6.png" alt="Bfmin7"/>
        </div>
        <div className="chord-option" data-val="Bmin7">
          <img src="http://jguitar.com/images/chordshape/B-Minor%207th-B-7%2C9%2C7%2C7%2C7%2C7.png" alt="Bmin7"/>
        </div>
      </div>
    );
  }
}

export default BChords;
