import React, {Component} from 'react';
import AChords from './AChords';
import BChords from './BChords';
import CChords from './CChords';
import DChords from './DChords';
import EChords from './EChords';
import FChords from './FChords';
import GChords from './GChords';

class ChordOptions extends Component {

  render() {
    return (
      <div className="chord-options-wrapper is-hidden">
        <div className="exit-chords-btn">X</div>
        <div className="chord-options-container">
          <div className="chord-triggers-container is-flex">
            <div className="chord-note-option" data-opt=".a-chords">A</div>
            <div className="chord-note-option" data-opt=".b-chords">B</div>
            <div className="chord-note-option" data-opt=".c-chords">C</div>
            <div className="chord-note-option" data-opt=".d-chords">D</div>
            <div className="chord-note-option" data-opt=".e-chords">E</div>
            <div className="chord-note-option" data-opt=".f-chords">F</div>
            <div className="chord-note-option" data-opt=".g-chords">G</div>
          </div>
          <AChords />
          <BChords />
          <CChords />
          <DChords />
          <EChords />
          <FChords />
          <GChords />
        </div>
      </div>
    );
  }
}

export default ChordOptions;
