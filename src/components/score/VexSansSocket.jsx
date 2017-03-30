import React, {Component} from 'react';
import Vex from 'vexflow/releases/vexflow-min';
import Tone from 'tone';
import base from '../../base';
import io from 'socket.io-client';

let socket = io(`http://localhost:3001`);

class VFDisplay extends Component {
  constructor() {
    super();
    this.state = {
      score: {}
    }
  }

  // wait for page load to bring in VexFlow
  componentDidMount() {
    let _this = this;
    let pageLoad = true;
    const VF = Vex.Flow;

    // socket config for recipient of score change
    socket.on("receive-score", function(scoreChange) {
      // socket.emit("receive-score");
      let parsedParams = JSON.parse(scoreChange);
      // console.log(parsedParams);
      if (score.id === parsedParams.score.id) {
        score = parsedParams.score;
        loadScore();
        if (parsedParams.selectedKeys) {
          loadNote(parsedParams.selectedKeys);
          drawScore();
          highlightNote();
        } else {
          resetCanvas();
        }
      }
    });

    // Create an SVG renderer and attach it to the DIV element named "vfDisplay".
    const vfDisplay = document.getElementById('vfDisplay');
    let renderer = new VF.Renderer(vfDisplay, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(1220, 500);
    let context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    let duration = '4';
    let allNoteVals = [];
    let noteVals = [];
    let chordVals = [];
    let newKey = [];

    // initializes new instances of VF StaveNotes
    function setLibrary(key, changing) {
      noteVals = [];
      chordVals = [];
      newKey = [];
      let c3 = new VF.StaveNote({keys: ['C/3'], duration: duration});
      let cs3 = new VF.StaveNote({keys: ['C#/3'], duration: duration});
      let df3 = new VF.StaveNote({keys: ['Db/3'], duration: duration});
      let d3 = new VF.StaveNote({keys: ['D/3'], duration: duration});
      let ds3 = new VF.StaveNote({keys: ['D#/3'], duration: duration});
      let ef3 = new VF.StaveNote({keys: ['Eb/3'], duration: duration});
      let e3 = new VF.StaveNote({keys: ['E/3'], duration: duration});
      let es3 = new VF.StaveNote({keys: ['E#/3'], duration: duration});
      let ff3 = new VF.StaveNote({keys: ['Fb/3'], duration: duration});
      let f3 = new VF.StaveNote({keys: ['F/3'], duration: duration});
      let fs3 = new VF.StaveNote({keys: ['F#/3'], duration: duration});
      let gf3 = new VF.StaveNote({keys: ['Gb/3'], duration: duration});
      let g3 = new VF.StaveNote({keys: ['G/3'], duration: duration});
      let gs3 = new VF.StaveNote({keys: ['G#/3'], duration: duration});
      let af3 = new VF.StaveNote({keys: ['Ab/3'], duration: duration});
      let a3 = new VF.StaveNote({keys: ['A/3'], duration: duration});
      let as3 = new VF.StaveNote({keys: ['A#/3'], duration: duration});
      let bf3 = new VF.StaveNote({keys: ['Bb/3'], duration: duration});
      let b3 = new VF.StaveNote({keys: ['B/3'], duration: duration});
      let bs3 = new VF.StaveNote({keys: ['B#/3'], duration: duration});
      let cf4 = new VF.StaveNote({keys: ['Cb/4'], duration: duration});
        //notes octave C4-C5
      let c4 = new VF.StaveNote({keys: ['C/4'], duration: duration});
      let cs4 = new VF.StaveNote({keys: ['C#/4'], duration: duration});
      let df4 = new VF.StaveNote({keys: ['Db/4'], duration: duration});
      let d4 = new VF.StaveNote({keys: ['D/4'], duration: duration});
      let ds4 = new VF.StaveNote({keys: ['D#/4'], duration: duration});
      let ef4 = new VF.StaveNote({keys: ['Eb/4'], duration: duration});
      let e4 = new VF.StaveNote({keys: ['E/4'], duration: duration});
      let es4 = new VF.StaveNote({keys: ['E#/4'], duration: duration});
      let ff4 = new VF.StaveNote({keys: ['Fb/4'], duration: duration});
      let f4 = new VF.StaveNote({keys: ['F/4'], duration: duration});
      let fs4 = new VF.StaveNote({keys: ['F#/4'], duration: duration});
      let gf4 = new VF.StaveNote({keys: ['Gb/4'], duration: duration});
      let g4 = new VF.StaveNote({keys: ['G/4'], duration: duration});
      let gs4 = new VF.StaveNote({keys: ['G#/4'], duration: duration});
      let af4 = new VF.StaveNote({keys: ['Ab/4'], duration: duration});
      let a4 = new VF.StaveNote({keys: ['A/4'], duration: duration});
      let as4 = new VF.StaveNote({keys: ['A#/4'], duration: duration});
      let bf4 = new VF.StaveNote({keys: ['Bb/4'], duration: duration});
      let b4 = new VF.StaveNote({keys: ['B/4'], duration: duration});
      let bs4 = new VF.StaveNote({keys: ['B#/4'], duration: duration});
      let cf5 = new VF.StaveNote({keys: ['Cb/5'], duration: duration});
        //notes octave C5-C6
      let c5 = new VF.StaveNote({keys: ['C/5'], duration: duration});
      let cs5 = new VF.StaveNote({keys: ['C#/5'], duration: duration});
      let df5 = new VF.StaveNote({keys: ['Db/5'], duration: duration});
      let d5 = new VF.StaveNote({keys: ['D/5'], duration: duration});
      let ds5 = new VF.StaveNote({keys: ['D#/5'], duration: duration});
      let ef5 = new VF.StaveNote({keys: ['Eb/5'], duration: duration});
      let e5 = new VF.StaveNote({keys: ['E/5'], duration: duration});
      let es5 = new VF.StaveNote({keys: ['E#/5'], duration: duration});
      let ff5 = new VF.StaveNote({keys: ['Fb/5'], duration: duration});
      let f5 = new VF.StaveNote({keys: ['F/5'], duration: duration});
      let fs5 = new VF.StaveNote({keys: ['F#/5'], duration: duration});
      let gf5 = new VF.StaveNote({keys: ['Gb/5'], duration: duration});
      let g5 = new VF.StaveNote({keys: ['G/5'], duration: duration});
      let gs5 = new VF.StaveNote({keys: ['G#/5'], duration: duration});
      let af5 = new VF.StaveNote({keys: ['Ab/5'], duration: duration});
      let a5 = new VF.StaveNote({keys: ['A/5'], duration: duration});
      let as5 = new VF.StaveNote({keys: ['A#/5'], duration: duration});
      let bf5 = new VF.StaveNote({keys: ['Bb/5'], duration: duration});
      let b5 = new VF.StaveNote({keys: ['B/5'], duration: duration});
      let bs5 = new VF.StaveNote({keys: ['B#/5'], duration: duration});
      let cf6 = new VF.StaveNote({keys: ['Cb/6'], duration: duration});
        //notes octave C6-C7
      let c6 = new VF.StaveNote({keys: ['C/6'], duration: duration});
      let cs6 = new VF.StaveNote({keys: ['C#/6'], duration: duration});
      let df6 = new VF.StaveNote({keys: ['Db/6'], duration: duration});
      let d6 = new VF.StaveNote({keys: ['D/6'], duration: duration});
      let ds6 = new VF.StaveNote({keys: ['D#/6'], duration: duration});
      let ef6 = new VF.StaveNote({keys: ['Eb/6'], duration: duration});
      let e6 = new VF.StaveNote({keys: ['E/6'], duration: duration});
      let es6 = new VF.StaveNote({keys: ['E#/6'], duration: duration});
      let ff6 = new VF.StaveNote({keys: ['Fb/6'], duration: duration});
      let f6 = new VF.StaveNote({keys: ['F/6'], duration: duration});
      let fs6 = new VF.StaveNote({keys: ['F#/6'], duration: duration});
      let gf6 = new VF.StaveNote({keys: ['Gb/6'], duration: duration});
      let g6 = new VF.StaveNote({keys: ['G/6'], duration: duration});
      let gs6 = new VF.StaveNote({keys: ['G#/6'], duration: duration});
      let af6 = new VF.StaveNote({keys: ['Ab/6'], duration: duration});
      let a6 = new VF.StaveNote({keys: ['A/6'], duration: duration});
      let as6 = new VF.StaveNote({keys: ['A#/6'], duration: duration});
      let bf6 = new VF.StaveNote({keys: ['Bb/6'], duration: duration});
      let b6 = new VF.StaveNote({keys: ['B/6'], duration: duration});
      let bs6 = new VF.StaveNote({keys: ['B#/6'], duration: duration});
      let cf7 = new VF.StaveNote({keys: ['Cb/7'], duration: duration});
      let c7 = new VF.StaveNote({keys: ['C/7'], duration: duration});

      allNoteVals = [c3.keys[0], cs3.keys[0], df3.keys[0], d3.keys[0], ds3.keys[0], ef3.keys[0], e3.keys[0], es3.keys[0], ff3.keys[0], f3.keys[0], fs3.keys[0], gf3.keys[0], g3.keys[0], gs3.keys[0], af3.keys[0], a3.keys[0], as3.keys[0], bf3.keys[0], b3.keys[0], bs3.keys[0], cf4.keys[0], c4.keys[0], cs4.keys[0], df4.keys[0], d4.keys[0], ds4.keys[0], ef4.keys[0], e4.keys[0], es4.keys[0], ff4.keys[0], f4.keys[0], fs4.keys[0], gf4.keys[0], g4.keys[0], gs4.keys[0], af4.keys[0], a4.keys[0], as4.keys[0], bf4.keys[0], b4.keys[0], bs4.keys[0], cf5.keys[0], c5.keys[0], cs5.keys[0], df5.keys[0], d5.keys[0], ds5.keys[0], ef5.keys[0], e5.keys[0], es5.keys[0], ff5.keys[0], f5.keys[0], fs5.keys[0], gf5.keys[0], g5.keys[0], gs5.keys[0], af5.keys[0], a5.keys[0], as5.keys[0], bf5.keys[0], b5.keys[0], bs5.keys[0], cf6.keys[0], c6.keys[0], cs6.keys[0], df6.keys[0], d6.keys[0], ds6.keys[0], ef6.keys[0], e6.keys[0], es6.keys[0], ff6.keys[0], f6.keys[0], fs6.keys[0], gf6.keys[0], g6.keys[0], gs6.keys[0], af6.keys[0], a6.keys[0], as6.keys[0], bf6.keys[0], b6.keys[0], bs6.keys[0], cf7.keys[0]];

      //major triads
      let C5 = {
        id: 'C5',
        chord: new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4'], duration: duration})
      };
      let Cs5 = {
        id: 'Cs5',
        chord: new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4'], duration: duration})
      };
      let Df5 = {
        id: 'Df5',
        chord: new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4'], duration: duration})
      };
      let D5 = {
        id: 'D5',
        chord: new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4'], duration: duration})
      };
      let Ds5 = {
        id: 'Ds5',
        chord: new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4'], duration: duration})
      };
      let Ef5 = {
        id: 'Ef5',
        chord: new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4'], duration: duration})
      };
      let E5 = {
        id: 'E5',
        chord: new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4'], duration: duration})
      };
      let F5 = {
        id: 'F5',
        chord: new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5'], duration: duration})
      };
      let Fs5 = {
        id: 'Fs5',
        chord: new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5'], duration: duration})
      };
      let Gf5 = {
        id: 'Gf5',
        chord: new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5'], duration: duration})
      };
      let G5 = {
        id: 'G5',
        chord: new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5'], duration: duration})
      };
      let Gs5 = {
        id: 'Gs5',
        chord: new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5'], duration: duration})
      };
      let Af5 = {
        id: 'Af5',
        chord: new VF.StaveNote({keys: ['Ab/4', 'C/5', 'Eb/5'], duration: duration})
      };
      let A5 = {
        id: 'A5',
        chord: new VF.StaveNote({keys: ['A/4', 'C#/5', 'E/5'], duration: duration})
      };
      let As5 = {
        id: 'As5',
        chord: new VF.StaveNote({keys: ['A#/4', 'C##/5', 'E#/5'], duration: duration})
      };
      let Bf5 = {
        id: 'Bf5',
        chord: new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5'], duration: duration})
      };
      let B5 = {
        id: 'B5',
        chord: new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5'], duration: duration})
      };

      //minor triads
      let Cm5 = {
        id: 'Cm5',
        chord: new VF.StaveNote({keys: ['C/4', 'Eb/4', 'G/4'], duration: duration})
      };
      let Csm5 = {
        id: 'Csm5',
        chord: new VF.StaveNote({keys: ['C#/4', 'E/4', 'G#/4'], duration: duration})
      };
      let Dfm5 = {
        id: 'Dfm5',
        chord: new VF.StaveNote({keys: ['Db/4', 'Fb/4', 'Ab/4'], duration: duration})
      };
      let Dm5 = {
        id: 'Dm5',
        chord: new VF.StaveNote({keys: ['D/4', 'F/4', 'A/4'], duration: duration})
      };
      let Dsm5 = {
        id: 'Dsm5',
        chord: new VF.StaveNote({keys: ['D#/4', 'F#/4', 'A#/4'], duration: duration})
      };
      let Efm5 = {
        id: 'Efm5',
        chord: new VF.StaveNote({keys: ['Eb/4', 'Gb/4', 'Bb/4'], duration: duration})
      };
      let Em5 = {
        id: 'Em5',
        chord: new VF.StaveNote({keys: ['E/4', 'G/4', 'B/4'], duration: duration})
      };
      let Fm5 = {
        id: 'Fm5',
        chord: new VF.StaveNote({keys: ['F/4', 'Ab/4', 'C/5'], duration: duration})
      };
      let Fsm5 = {
        id: 'Fsm5',
        chord: new VF.StaveNote({keys: ['F#/4', 'A/4', 'C#/5'], duration: duration})
      };
      let Gfm5 = {
        id: 'Gfm5',
        chord: new VF.StaveNote({keys: ['Gb/4', 'Bbb/4', 'Db/5'], duration: duration})
      };
      let Gm5 = {
        id: 'Gm5',
        chord: new VF.StaveNote({keys: ['G/4', 'Bb/4', 'D/5'], duration: duration})
      };
      let Gsm5 = {
        id: 'Gsm5',
        chord: new VF.StaveNote({keys: ['G#/4', 'B/4', 'D#/5'], duration: duration})
      };
      let Afm5 = {
        id: 'Afm5',
        chord: new VF.StaveNote({keys: ['Ab/4', 'Cb/5', 'Eb/5'], duration: duration})
      };
      let Am5 = {
        id: 'Am5',
        chord: new VF.StaveNote({keys: ['A/4', 'C/5', 'E/5'], duration: duration})
      };
      let Asm5 = {
        id: 'Asm5',
        chord: new VF.StaveNote({keys: ['A#/4', 'C#/5', 'E#/5'], duration: duration})
      };
      let Bfm5 = {
        id: 'Bfm5',
        chord: new VF.StaveNote({keys: ['Bb/4', 'Db/5', 'F/5'], duration: duration})
      };
      let Bm5 = {
        id: 'Bm5',
        chord: new VF.StaveNote({keys: ['B/4', 'D/5', 'F#/5'], duration: duration})
      };

      //dominant seven chords
      let C7 = {
        id: 'C7',
        chord: new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4', 'Bb/4'], duration: duration})
      };
      let Cs7 = {
        id: 'Cs7',
        chord: new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4', 'B/4'], duration: duration})
      };
      let Df7 = {
        id: 'Df7',
        chord: new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4', 'Cb/5'], duration: duration})
      };
      let D7 = {
        id: 'D7',
        chord: new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4', 'C/5'], duration: duration})
      };
      let Ds7 = {
        id: 'Ds7',
        chord: new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4', 'C#/5'], duration: duration})
      };
      let Ef7 = {
        id: 'Ef7',
        chord: new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4', 'Db/5'], duration: duration})
      };
      let E7 = {
        id: 'E7',
        chord: new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4', 'D/5'], duration: duration})
      };
      let F7 = {
        id: 'F7',
        chord: new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5', 'Eb/5'], duration: duration})
      };
      let Fs7 = {
        id: 'Fs7',
        chord: new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5', 'E/5'], duration: duration})
      };
      let Gf7 = {
        id: 'Gf7',
        chord: new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5', 'Fb/5'], duration: duration})
      };
      let G7 = {
        id: 'G7',
        chord: new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5', 'F/5'], duration: duration})
      };
      let Gs7 = {
        id: 'Gs7',
        chord: new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5', 'F#/5'], duration: duration})
      };
      let Af7 = {
        id: 'Af7',
        chord: new VF.StaveNote({keys: [ 'Ab/4', 'C/5', 'Eb/5', 'Gb/5' ], duration: duration})
      };
      let A7 = {
        id: 'A7',
        chord: new VF.StaveNote({keys: [ 'A/4', 'C#/5', 'E/5', 'G/5' ], duration: duration})
      };
      let As7 = {
        id: 'As7',
        chord: new VF.StaveNote({keys: [ 'A#/4', 'C##/5', 'E#/5', 'G#/5' ], duration: duration})
      };
      let Bf7 = {
        id: 'Bf7',
        chord: new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5', 'Ab/5'], duration: duration})
      };
      let B7 = {
        id: 'B7',
        chord: new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5', 'A/5'], duration: duration})
      };

      //Major seven chords
      let CMaj7 = {
        id: 'CMaj7',
        chord: new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4', 'B/4'], duration: duration})
      };
      let CsMaj7 = {
        id: 'CsMaj7',
        chord: new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4', 'B#/4'], duration: duration})
      };
      let DfMaj7 = {
        id: 'DfMaj7',
        chord: new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4', 'C/5'], duration: duration})
      };
      let DMaj7 = {
        id: 'Dmaj7',
        chord: new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4', 'C#/5'], duration: duration})
      };
      let DsMaj7 = {
        id: 'DsMaj7',
        chord: new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4', 'C##/5'], duration: duration})
      };
      let EfMaj7 = {
        id: 'EfMaj7',
        chord: new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4', 'D/5'], duration: duration})
      };
      let EMaj7 = {
        id: 'EMaj7',
        chord: new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4', 'D#/5'], duration: duration})
      };
      let FMaj7 = {
        id: 'FMaj7',
        chord: new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5', 'E/5'], duration: duration})
      };
      let FsMaj7 = {
        id: 'FsMaj7',
        chord: new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5', 'E#/5'], duration: duration})
      };
      let GfMaj7 = {
        id: 'GfMaj7',
        chord: new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5', 'F/5'], duration: duration})
      };
      let GMaj7 = {
        id: 'Gmaj7',
        chord: new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5', 'F#/5'], duration: duration})
      };
      let GsMaj7 = {
        id: 'GsMaj7',
        chord: new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5', 'F##/5'], duration: duration})
      };
      let AfMaj7 = {
        id: 'AfMaj7',
        chord: new VF.StaveNote({keys: [ 'Ab/4', 'C/5', 'Eb/5', 'G/5' ], duration: duration})
      };
      let AMaj7 = {
        id: 'AMaj7',
        chord: new VF.StaveNote({keys: [ 'A/4', 'C#/5', 'E/5', 'G#/5' ], duration: duration})
      };
      let AsMaj7 = {
        id: 'AsMaj7',
        chord: new VF.StaveNote({keys: [ 'A#/4', 'C##/5', 'E#/5', 'G##/5' ], duration: duration})
      };
      let BfMaj7 = {
        id: 'BfMaj7',
        chord: new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5', 'A/5'], duration: duration})
      };
      let BMaj7 = {
        id: 'BMaj7',
        chord: new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5', 'A#/5'], duration: duration})
      };

      //minor seven chords
      let Cmin7 = {
        id: 'Cmin7',
        chord: new VF.StaveNote({keys: ['C/4', 'Eb/4', 'G/4', 'Bb/4'], duration: duration})
      };
      let Csmin7 = {
        id: 'Csmin7',
        chord: new VF.StaveNote({keys: ['C#/4', 'E/4', 'G#/4', 'B/4'], duration: duration})
      };
      let Dfmin7 = {
        id: 'Dfmin7',
        chord: new VF.StaveNote({keys: ['Db/4', 'Fb/4', 'Ab/4', 'Cb/5'], duration: duration})
      };
      let Dmin7 = {
        id: 'Dmin7',
        chord: new VF.StaveNote({keys: ['D/4', 'F/4', 'A/4', 'C/5'], duration: duration})
      };
      let Dsmin7 = {
        id: 'Dsmin7',
        chord: new VF.StaveNote({keys: ['D#/4', 'F#/4', 'A#/4', 'C#/5'], duration: duration})
      };
      let Efmin7 = {
        id: 'Efmin7',
        chord: new VF.StaveNote({keys: ['Eb/4', 'Gb/4', 'Bb/4', 'Db/5'], duration: duration})
      };
      let Emin7 = {
        id: 'Emin7',
        chord: new VF.StaveNote({keys: ['E/4', 'G/4', 'B/4', 'D/5'], duration: duration})
      };
      let Fmin7 = {
        id: 'Fmin7',
        chord: new VF.StaveNote({keys: ['F/4', 'Ab/4', 'C/5', 'Eb/5'], duration: duration})
      };
      let Fsmin7 = {
        id: 'Fsmin7',
        chord: new VF.StaveNote({keys: ['F#/4', 'A/4', 'C#/5', 'E/5'], duration: duration})
      };
      let Gfmin7 = {
        id: 'Gfmin7',
        chord: new VF.StaveNote({keys: ['Gb/4', 'Bbb/4', 'Db/5', 'Fb/5'], duration: duration})
      };
      let Gmin7 = {
        id: 'Gmin7',
        chord: new VF.StaveNote({keys: ['G/4', 'Bb/4', 'D/5', 'F/5'], duration: duration})
      };
      let Gsmin7 = {
        id: 'Gsmin7',
        chord: new VF.StaveNote({keys: ['G#/4', 'B/4', 'D#/5', 'F#/5'], duration: duration})
      };
      let Afmin7 = {
        id: 'Afmin7',
        chord: new VF.StaveNote({keys: [ 'Ab/4', 'Cb/5', 'Eb/5', 'Gb/5' ], duration: duration})
      };
      let Amin7 = {
        id: 'Amin7',
        chord: new VF.StaveNote({keys: [ 'A/4', 'C/5', 'E/5', 'G/5' ], duration: duration})
      };
      let Asmin7 = {
        id: 'Asmin7',
        chord: new VF.StaveNote({keys: [ 'A#/4', 'C#/5', 'E#/5', 'G#/5' ], duration: duration})
      };
      let Bfmin7 = {
        id: 'Bfmin7',
        chord: new VF.StaveNote({keys: ['Bb/4', 'Db/5', 'F/5', 'Ab/5'], duration: duration})
      };
      let Bmin7 = {
        id: 'Bmin7',
        chord: new VF.StaveNote({keys: ['B/4', 'D/5', 'F#/5', 'A/5'], duration: duration})
      };

      // chord values
      chordVals = [C5, Cs5, Df5, D5, Ds5, Ef5, E5, F5, Fs5, Gf5, G5, Gs5, Af5, A5, As5, Bf5, B5,
                   Cm5, Csm5, Dfm5, Dm5, Dsm5, Efm5, Em5, Fm5, Fsm5, Gfm5, Gm5, Gsm5, Afm5, Am5, Bfm5, Bm5,
                   C7, Cs7, Df7, D7, Ds7, Ef7, E7, F7, Fs7, Gf7, G7, Gs7, Af7, A7, As7, Bf7, B7,
                   CMaj7, CsMaj7, DfMaj7, DMaj7, DsMaj7, EfMaj7, EMaj7, FMaj7, FsMaj7, GfMaj7, GMaj7, GsMaj7, AfMaj7, AMaj7, AsMaj7, BfMaj7, BMaj7,
                   Cmin7, Csmin7, Dfmin7, Dmin7, Dsmin7, Efmin7, Emin7, Fmin7, Fsmin7, Gfmin7, Gmin7, Gsmin7, Afmin7, Amin7, Asmin7, Bfmin7, Bmin7];

      // scales
      let cMajScale = [c3, d3, e3, f3, g3, a3, b3, c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5, a5, b5, c6, d6, e6, f6, g6, a6, b6, c7];
      let gMajScale = [c3, d3, e3, fs3, g3, a3, b3, c4, d4, e4, fs4, g4, a4, b4, c5, d5, e5, fs5, g5, a5, b5, c6, d6, e6, fs6, g6, a6, b6, c7];
      let dMajScale = [cs3, d3, e3, fs3, g3, a3, b3, cs4, d4, e4, fs4, g4, a4, b4, cs5, d5, e5, fs5, g5, a5, b5, cs6, d6, e6, fs6, g6, a6, b6];
      let aMajScale = [cs3, d3, e3, fs3, gs3, a3, b3, cs4, d4, e4, fs4, gs4, a4, b4, cs5, d5, e5, fs5, gs5, a5, b5, cs6, d6, e6, fs6, gs6, a6, b6];
      let eMajScale = [cs3, ds3, e3, fs3, gs3, a3, b3, cs4, ds4, e4, fs4, gs4, a4, b4, cs5, ds5, e5, fs5, gs5, a5, b5, cs6, ds6, e6, fs6, gs6, a6, b6];
      let bMajScale = [cs3, ds3, e3, fs3, gs3, as3, b3, cs4, ds4, e4, fs4, gs4, as4, b4, cs5, ds5, e5, fs5, gs5, as5, b5, cs6, ds6, e6, fs6, gs6, as6, b6];
      let fsMajScale = [cs3, ds3, es3, fs3, gs3, as3, b3, cs4, ds4, es4, fs4, gs4, as4, b4, cs5, ds5, es5, fs5, gs5, as5, b5, cs6, ds6, es6, fs6, gs6, as6, b6];

      let fMajScale = [c3, d3, e3, f3, g3, a3, bf3, c4, d4, e4, f4, g4, a4, bf4, c5, d5, e5, f5, g5, a5, bf5, c6, d6, e6, f6, g6, a6, bf6, c7];
      let bfMajScale = [c3, d3, ef3, f3, g3, a3, bf3, c4, d4, ef4, f4, g4, a4, bf4, c5, d5, ef5, f5, g5, a5, bf5, c6, d6, ef6, g6, a6, bf6, c7];
      let efMajScale = [c3, d3, ef3, f3, g3, af3, bf3, c4, d4, ef4, f4, g4, af4, bf4, c5, d5, ef5, f5, g5, af5, bf5, c6, d6, ef6, g6, af6, bf6, c7];
      let afMajScale = [c3, df3, ef3, f3, g3, af3, bf3, c4, df4, ef4, f4, g4, af4, bf4, c5, df5, ef5, f5, g5, af5, bf5, c6, df6, ef6, g6, af6, bf6, c7];
      let dfMajScale = [c3, df3, ef3, f3, gf3, af3, bf3, c4, df4, ef4, f4, gf4, af4, bf4, c5, df5, ef5, f5, gf5, af5, bf5, c6, df6, ef6, gf6, af6, bf6, c7];
      let gfMajScale = [df3, ef3, f3, gf3, af3, bf3, cf4, df4, ef4, f4, gf4, af4, bf4, cf5, df5, ef5, f5, gf5, af5, bf5, cf6, df6, ef6, gf6, af6, bf6, cf7];

      // console.log(scale);
      switch (key) {
        case 'C':
          cMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'G':
          gMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'D':
          dMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'A':
          aMajScale.forEach((note) => {
          changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'E':
          eMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'B':
          bMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'F#':
          fsMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'F':
          fMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'Bb':
          bfMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'Eb':
          efMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'Ab':
          afMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'Db':
          dfMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
        case 'Gb':
          gfMajScale.forEach((note) => {
            changing ? newKey.push(note) : noteVals.push(note);
          });
          break;
      }
    }

    // declaration of base score values
    let beatCount = 4;
    let beatValue = 4;
    let barIndex = 0;
    let firstTie = true;
    let tieIndex = null;
    let firstTied = null;
    let lastTied = null;
    let selectedAcc = null;
    let selectedId = null;
    let idMapIndex = null;
    let selectedNote = null;
    let barNoteIndex = null;

    let staveX = 0;
    let staveY = 0;
    let staveWidth = 300;

    let score = {
      id: Date.now(),
      title: '',
      bpm: 120,
      keySig: 'C',
      timeSig: {count: beatCount, value: beatValue},
      clef: 'treble',
      collaborators: {},
      measures: [],
      ties: [],
      noteIDMap: []
    }

    setTimeout(() => {
      if (this.props.score) {
        score = this.props.score;
        document.querySelector('.score-title').innerHTML = this.props.score.title;
        if (!score.ties) {
          score.ties = [];
        }
        loadScore();
        setLibrary(score.keySig, false);
        drawScore();
        bindEvents();
      } else {
        score.title = 'Score Title';
        document.querySelector('.score-title').innerHTML = score.title;
        score.collaborators[`user-${this.props.user}`] = true;
        setLibrary(score.keySig, false);
        newMeasure();
        drawScore();
        bindEvents();
      }
      barIndex = 0;
      selectedId = `vf-${score.measures[0].notes[0].attrs.id}`;
      selectedNote = score.measures[0].notes[0];
      barNoteIndex = 0;
      idMapIndex = score.noteIDMap.indexOf(selectedId);
      highlightNote();
    }, 2000);

    // draw a bar for each measure to the canvas
    function drawScore() {
      // clear anything on the canvas
      context.clear();

      if (score.clef === 'treble') {
        document.querySelector('.toggle-clef-btn img').src = 'https://image.flaticon.com/icons/svg/2/2227.svg';
      } else {
        document.querySelector('.toggle-clef-btn img').src = 'https://image.flaticon.com/icons/svg/125/125036.svg';
      }

      for (let i = 0; i < score.measures.length; i++) {
        let x = score.measures[i].staveX;
        let y = score.measures[i].staveY;
        let fill = score.measures[i].fillColor;

        if (i === 0) {
          // add a clef, key, and time signature to first bar.
          score.measures[i].stave = new VF.Stave(x, y, staveWidth, { fill_style: fill});
          score.measures[i].stave.addClef(score.clef).addTimeSignature(`${score.timeSig.count}/${score.timeSig.value}`);
          let keySig = new VF.KeySignature(score.keySig);
          keySig.addToStave(score.measures[i].stave);
        } else {
          score.measures[i].stave = new VF.Stave(x, y, staveWidth, { fill_style: fill});
        }

        // draw staves and notes
        score.measures[i].stave.setContext(context).draw();
        VF.Formatter.FormatAndDraw(context, score.measures[i].stave, score.measures[i].notes);

        // generate beams
        let beams = VF.Beam.generateBeams(score.measures[i].notes);
        beams.forEach(function(beam) {
          beam.setContext(context).draw();
        });

        score.ties.forEach(function(tie) {tie.vfTie.setContext(context).draw()});
      }
    }

    // bind events
    function bindEvents() {
      bindNotes();

      if (pageLoad) {
        // chat toggle
        const messageInput = document.getElementById('message');
        const titleInput = document.querySelector('.title-input');
        const bpmInput = document.querySelector('.bpm-input');
        messageInput.addEventListener('focus', () => {
          if (selectedNote) {
            unselectNote();
          }
        });
        titleInput.addEventListener('focus', () => {
          if (selectedNote) {
            unselectNote();
          }
        });
        bpmInput.addEventListener('focus', () => {
          if (selectedNote) {
            unselectNote();
          }
        });

        // print button
        document.querySelector('.print-btn').addEventListener('click', () => {
          printScore();
        });

        // add measure button
        document.querySelector('.add-measure-btn').addEventListener('click', () => {
          addMeasure();
        });

        // toggle chord options button
        document.querySelector('.chords-btn').addEventListener('click', () => {
          if (selectedNote) {
            toggleOptions('.chord-options-wrapper');
          }
        });

        // chord options buttons
        let chordOptions = document.querySelectorAll('.chord-option');
        chordOptions.forEach((option) => {
          option.addEventListener('click', function() {
            let chord = option.getAttribute('data-val');
            writeChord(chord);
          });
        })

        // add dot button
        document.querySelector('.dot-btn').addEventListener('click', () => {
          if (selectedNote) {
            dotNote();
          }
        });

        // key options buttons
        let keyOptions = document.querySelectorAll('.key-option');
        keyOptions.forEach((option) => {
          option.addEventListener('click', function() {
            let key = option.getAttribute('data-key');
            updateKeySig(key);
          })
        });

        // key signature button
        document.querySelector('.key-sig-btn').addEventListener('click', () => {
          unselectNote();
          toggleOptions('.key-options-container');
        });

        // note options buttons
        let noteOptions = document.querySelectorAll('.note-option');
        noteOptions.forEach((option) => {
          option.addEventListener('click', function() {
            if (selectedNote) {
              setNoteDuration(option.getAttribute('data-val'));
            }
          });
        });

        // time options buttons
        let timeOptions = document.querySelectorAll('.time-option');
        timeOptions.forEach((option) => {
          option.addEventListener('click', function() {
            let count = option.getAttribute('data-count');
            let val = option.getAttribute('data-val');
            updateTimeSig(count, val);

          })
        });

        // accidental options buttons
        let accidentalOptions = document.querySelectorAll('.acc-option');
        accidentalOptions.forEach((option) => {
          option.addEventListener('click', function() {
            if (selectedNote) {
              addAccidental(option.getAttribute('data-val'));
            }
          })
        });

        // chord note options toggle
        let chordNoteOptions = document.querySelectorAll('.chord-note-option');
        chordNoteOptions.forEach((rootNote) => {
          rootNote.addEventListener('click', function() {
            toggleChordRoot(rootNote.getAttribute('data-opt'));
          });
        });

        // tie notes button
        document.querySelector('.tie-btn').addEventListener('click', function() {
          if (selectedNote) {
            tieNotes();
          }
        });

        // time signature button
        document.querySelector('.time-sig-btn').addEventListener('click', () => {
          toggleOptions('.time-options-wrapper');
        });

        // toggle clef button
        document.querySelector('.toggle-clef-btn').addEventListener('click', () => {
          toggleClef();
        });

        // exit chord options button
        document.querySelector('.exit-chords-btn').addEventListener('click', () => {
          toggleOptions('.chord-options-wrapper');
        });

        // exit key options button
        document.querySelector('.exit-keys-btn').addEventListener('click', () => {
          toggleOptions('.key-options-container');
        });

        // exit time options button
        document.querySelector('.exit-times-btn').addEventListener('click', () => {
          toggleOptions('.time-options-wrapper');
        });

        //playback controls
        document.querySelector('.playBtn').addEventListener('click', () => {
            convertVexToTone();
        });
        document.querySelector('.pauseBtn').addEventListener('click', () => {
            convertVexToTone();
        });
        document.querySelector('.stopBtn').addEventListener('click', () => {
            stopPlayback();
        });
        // document.querySelector('.edit-bpm-form').addEventListener('submit', () => {
        //   console.log(document.getElementById('scoreBpm').value);
        // });

        pageLoad = false;
      }

      // keypresses
      document.onkeydown = checkKey;
    }

    // bind notes on each canvas paint
    function bindNotes() {
      let allNotes = document.querySelectorAll('.vf-stavenote');
      allNotes.forEach((note) => {
        // select a note by id on click
        note.addEventListener('click', function() {
          getNoteById(this);
        });
      });
    }

    // check which key was pressed
    function checkKey(e) {
      e = e || window.event;

      if (selectedNote) {
        if (e.keyCode === 38) {
          // up arrow
          e.preventDefault();
          changePitch('up');
        } else if (e.keyCode === 40) {
          // down arrow
          e.preventDefault();
          changePitch('down');
        } else if (e.keyCode === 37) {
          // left arrow
          e.preventDefault();
          changeSelection('left');
        } else if (e.keyCode === 39) {
          // right arrow
          e.preventDefault();
          changeSelection('right');
        } else if (e.keyCode === 8) {
          // backspace
          e.preventDefault();
          deleteNote();
        } else if (e.keyCode === 67) {
          // c key
          e.preventDefault();
          copyNote();
        } else if (e.keyCode === 27) {
          // escape key
          e.preventDefault();
          unselectNote();
        }
      }
    }

    // adds specified accidental to selected note
    function addAccidental(accidental) {
      selectedAcc = accidental;
      selectedNote = new VF.StaveNote({clef: score.clef, keys: selectedNote.keys, duration: duration})
        .addAccidental(0, new VF.Accidental(accidental));
      // console.log(selectedNote);
      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes[barNoteIndex] = selectedNote;
      score.noteIDMap[idMapIndex] = selectedId;

      resetCanvas();
      highlightNote();
      // socketForScore();
    }

    // inserts a measure at the end of the score
    function addMeasure() {
      newMeasure();
      unselectNote();
      // socketForScore();
    }

    // increase note value on up arrow
    function changePitch(key) {
      if (selectedNote.keys.length === 1) {
        let currentPitch;
        let newPitch;
        noteVals.forEach((note) => {
          if (note.keys[0].toLowerCase() === selectedNote.keys[0].toLowerCase()) {
            currentPitch = noteVals.indexOf(note);
          }
        });

        if (currentPitch === noteVals.length - 1 && key === 'up') {
          newPitch = noteVals[0];
        } else if (currentPitch === 0 && key === 'down') {
          newPitch = noteVals[noteVals.length - 1];
        } else {
          key === 'up' ? newPitch = noteVals[currentPitch + 1] : newPitch = noteVals[currentPitch - 1];
        }

        // update value in score object
        score.measures[barIndex].notes[score.measures[barIndex].notes.indexOf(selectedNote)] = newPitch;
        score.noteIDMap[score.noteIDMap.indexOf(selectedId)] = `vf-${newPitch.attrs.id}`;
        selectedId = `vf-${newPitch.attrs.id}`;
        if (selectedNote.dots) {
          newPitch.addDotToAll();
        }

        // account for existing ties/slurs
        for (let i = 0; i < score.ties.length; i++) {
          if (score.ties[i].vfTie.first_note === selectedNote) {
            firstTied = selectedNote;
            tieIndex = i;
          } else if (score.ties[i].vfTie.last_note === selectedNote) {
            lastTied = selectedNote;
            tieIndex = i;
          }
        }

        // make update and repaint
        selectedNote = newPitch;

        // updateTies();
        resetCanvas();
        updateTies();
        highlightNote();
        // socketForScore();
      }
    }

    // change selected note with left and right arrow keys
    function changeSelection(key) {
      let currentId = selectedNote.attrs.el.id;
      let selectedIndex = score.noteIDMap.indexOf(selectedId);
      let nextId = score.noteIDMap[selectedIndex + 1];
      let prevId = score.noteIDMap[selectedIndex - 1];

      if (key === 'right') {
        if (nextId) {
          getNoteById(nextId, true);
        } else {
          getNoteById(score.noteIDMap[0], true);
        }
      } else {
        if (prevId) {
          getNoteById(prevId, true);
        } else {
          getNoteById(score.noteIDMap[score.noteIDMap.length - 1], true);
        }
      }
    }

    // updates any ties the selectedNote is included in
    function updateTies() {
      if (firstTied) {
        score.ties[tieIndex].vfTie.first_note = selectedNote;
      }
      if (lastTied) {
        score.ties[tieIndex].vfTie.last_note = selectedNote;
      }
      firstTied = null;
      lastTied = null;
    }

    // copy selected note and paste copy next to it
    function copyNote() {
      let pitchVal = selectedNote.keys;
      if (selectedNote.noteType === 'r') {
        duration = `${selectedNote.duration}r`;
      } else {
        duration = selectedNote.duration;
      }

      selectedNote = new VF.StaveNote({clef: score.clef, keys: pitchVal, duration: duration});
      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes.splice(barNoteIndex, 0, selectedNote);
      score.noteIDMap.splice(idMapIndex, 0, selectedId);

      setMeasureBeats(score.measures[barIndex]);
      highlightNote();
    }

    let toneArray = [];

    function convertVexToTone() {
      score.measures.forEach((measure) => {
        measure.notes.forEach((note) => {
          let pitchArr = [];
          note.keys.forEach((thing) => {
            let pitch = thing.replace('/', '');
            pitchArr.push(pitch);
          });
          let tempObj = {};
          tempObj.dur = note.duration;
          tempObj.note = pitchArr;
          tempObj.time = '0:';
          if (note.noteType === 'r') {
            delete tempObj.note;
          }
          // console.log(tempObj);
          toneArray.push(tempObj);
        });
      });
      formatToneArr();

    }

    // remove selected note from score
    function deleteNote() {
      // don't allow first note in first measure to be deleted
      if (score.measures[0].notes.length > 1) {
        score.measures[barIndex].notes.splice(barNoteIndex, 1);
        score.noteIDMap.splice(idMapIndex, 1);
        setMeasureBeats(score.measures[barIndex]);

        // handle deleting last note in a measure
        if (score.measures[barIndex].beats === 0) {
          score.measures.splice(barIndex, 1);
        }

        // remove ties associated with the deleted note
        for (let i = 0; i < score.ties.length; i++) {
          if (score.ties[i].vfTie.first_note === selectedNote || score.ties[i].vfTie.last_note === selectedNote) {
            score.ties.splice(i, 1);
          }
        }
        unselectNote();
      }
    }
    // add dot to note
    function dotNote() {
      if (selectedNote.noteType === 'r') {
        duration = `${selectedNote.duration}r`;
      } else {
        duration = selectedNote.duration;
      }

      if (!selectedNote.dots) {
        selectedNote = new VF.StaveNote({clef: score.clef, keys: selectedNote.keys, duration: duration}).addDotToAll();
      } else {
        selectedNote = new VF.StaveNote({clef: score.clef, keys: selectedNote.keys, duration: duration});
      }

      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes[barNoteIndex] = selectedNote;
      score.noteIDMap[idMapIndex] = selectedId;
      setMeasureBeats(score.measures[barIndex]);
      // socketForScore();
      highlightNote();
    }

    function formatToneArr() {
      let timeVal = 0;
      let toneDur = 0;
      toneArray.forEach((obj, index) => {
        if (index === 0) {
          obj.time = '0:0';
        }
        switch (obj.dur) {
          case 'w':
            obj.dur = `${toneDur}`;
            obj.time = `0:${timeVal}`;
            if (!obj.dot) {
              toneDur += 2;
              timeVal += 4;
            } else {
              toneDur += 3;
              timeVal += 6;
            };
            break;
          case 'h':
            obj.dur = '1';
            obj.time = `0:${timeVal}`;
            if (!obj.dot) {
              toneDur += 1;
              timeVal += 2;
            } else {
              toneDur += 1.5;
              timeVal += 3;
            };
            break;
          case 'q':
            obj.dur = '0.5';
            obj.time = `0:${timeVal}`;
            if (!obj.dot) {
              toneDur += 0.5;
              timeVal += 1;
            } else {
              toneDur += 0.75;
              timeVal += 1.5;
            };
            break;
          case '8':
            obj.dur = '0.25';
            obj.time = `0:${timeVal}`;
            if (!obj.dot) {
              toneDur += 0.25;
              timeVal += 0.5;
            } else {
              toneDur += 0.375;
              timeVal += 0.75;
            };
            break;
          case '16':
            obj.dur = '0.125';
            obj.time = `0:${timeVal}`;
            if (!obj.dot) {
              toneDur += 0.125;
              timeVal += 0.25;
            } else {
              toneDur += 0.1875;
              timeVal += 0.375;
            };
            break;
        }
      });
      createVoice();
    }

    // match clicked note with its data by id and set as selected
    function getNoteById(note, arrows) {
      arrows ? selectedId = note : selectedId = note.id;
      barIndex;

      for (let i = 0; i < score.measures.length; i++) {
        for (let j = 0; j < score.measures[i].notes.length; j++) {
          let currentNote = score.measures[i].notes[j];
          let currentNoteId = score.measures[i].notes[j].attrs.el.id;
          if (selectedId === currentNoteId) {
            barIndex = score.measures.indexOf(score.measures[i]);
            selectedNote = currentNote;
            if (selectedNote.noteType !== 'r') {
              duration = selectedNote.duration;
            } else {
              duration = `${selectedNote.duration}r`;
            }
            barNoteIndex = score.measures[barIndex].notes.indexOf(selectedNote);
            idMapIndex = score.noteIDMap.indexOf(selectedId);
          }
        }
      }
      highlightNote();
    }

    // reload selected note values passed by socket
    function loadNote(data) {
      if (data.selectedNote.noteType === 'r') {
        data.selectedNote.duration = `${data.selectedNote.duration}r`;
      }

      if (data.selectedNote.dots) {
        if (data.accidental) {
          selectedNote = new VF.StaveNote({clef: score.clef, keys: data.selectedNote.keys, duration: data.selectedNote.duration}).addAccidental(0, new VF.Accidental(data.accidental)).addDotToAll();
        } else {
          selectedNote = new VF.StaveNote({clef: score.clef, keys: data.selectedNote.keys, duration: data.selectedNote.duration}).addDotToAll();
        }
      } else {
        if (data.accidental) {
          selectedNote = new VF.StaveNote({clef: score.clef, keys: data.selectedNote.keys, duration: data.selectedNote.duration}).addAccidental(0, new VF.Accidental(data.accidental));
        } else {
          selectedNote = new VF.StaveNote({clef: score.clef, keys: data.selectedNote.keys, duration: data.selectedNote.duration});
        }
      }

      // update note in score at barNoteIndex, selectedid, and idmap
      selectedId = `vf-${selectedNote.attrs.id}`;
      barIndex = data.barIndex;
      barNoteIndex = data.barNoteIndex;
      idMapIndex = data.idMapIndex;
      score.measures[barIndex].notes[barNoteIndex] = selectedNote;
      score.noteIDMap[idMapIndex] = selectedId;
    }

    // creates new StaveNote and noteIDMap data for previously stripped firebase version of score
    function loadScore() {
      score.noteIDMap = [];
      for (let i = 0; i < score.measures.length; i++) {
        for (let j = 0; j < score.measures[i].notes.length; j++) {
          let keyVals = score.measures[i].notes[j].keys;
          let durVal = score.measures[i].notes[j].duration;
          let noteType = score.measures[i].notes[j].noteType;

          if (noteType === 'r') {
            durVal = `${durVal}r`;
          }

          score.measures[i].notes[j] = new VF.StaveNote({clef: score.clef, keys: keyVals, duration: durVal});

          // update id map
          let newId = `vf-${score.measures[i].notes[j].attrs.id}`;
          score.noteIDMap.push(newId);
        }
      }

      // if (score.ties) {
      //   for (let i = 0; i < score.ties.length; i++) {
      //     score.ties[i] = {
      //       endBar: score.ties[i].endBar,
      //       startBar: score.ties[i].startBar,
      //       firstNoteIndex: score.ties[i].firstNoteIndex,
      //       lastNoteIndex: score.ties[i].lastNoteIndex,
      //     };
      //     score.ties[i].vfTie = new VF.StaveTie({
      //       first_note: score.measures[score.ties[i].startBar].notes[score.ties[i].firstNoteIndex],
      //       last_note: score.measures[score.ties[i].endBar].notes[score.ties[i].lastNoteIndex],
      //       first_indices: 0,
      //       last_indices: 0
      //     });
      //   }
      // }

      staveX = score.measures[score.measures.length - 1].staveX;
      staveY = score.measures[score.measures.length - 1].staveY;
    }

    // mark a note as highlighted
    function highlightNote() {
      const blueAccent = "#41A2EB";

      // remove highlight from all notes
      for (let i = 0; i < score.measures.length; i++) {
        score.measures[i].notes.forEach((note) => {
          note.setStyle({fillStyle: 'black', strokeStyle: 'black'});
        });
      }

      // highlight newly selected note
      let highlightedNote = score.measures[barIndex].notes[barNoteIndex];
      highlightedNote.setStyle({fillStyle: blueAccent, strokeStyle: blueAccent});
      // console.log(selectedNote);
      resetCanvas();
    }
// score.measures[barIndex].notes[barNoteIndex];
    // Creates a new default measure
    function newMeasure() {
      let tempBar = {};
      tempBar.fillColor = '#999999';

      // stave positioning
      if (score.measures.length % 4 === 0) {
        tempBar.staveX = 0;
        staveY += 100;
      } else {
        let prevStav = score.measures[score.measures.length - 1];
        tempBar.staveX = prevStav.stave.width + prevStav.stave.x;
      }
      if (score.measures.length < 4) {
        tempBar.staveY = 0;
      } else {
        tempBar.staveY = staveY;
      }
      tempBar.stave = new VF.Stave(staveX, staveY, staveWidth);

      // default ties and notes
      tempBar.ties = [];
      tempBar.notes = [];
      if (beatCount === '6') {
        for (let i = 0; i < beatCount / 2; i++) {
          tempBar.notes[i] = new VF.StaveNote({clef: score.clef, keys: noteVals[7].keys, duration: "q"});
          score.noteIDMap.push(`vf-${tempBar.notes[i].attrs.id}`);
        }
      } else {
        for (let i = 0; i < beatCount; i++) {
          tempBar.notes[i] = new VF.StaveNote({clef: score.clef, keys: noteVals[7].keys, duration: "q"});
          score.noteIDMap.push(`vf-${tempBar.notes[i].attrs.id}`);
        }
      }

      score.measures.push(tempBar);
      let newestStave = score.measures[score.measures.length - 1];
      setMeasureBeats(newestStave);
    }
    let part = null;
    let synth = null;
    let started = false;
    let paused = false;

    function createVoice() {
      Tone.Transport.bpm.value = parseInt(score.bpm, 10);
      if (part) {
        part.dispose();
        synth.dispose();
      }
      // bpm = 120;
      synth = new Tone.PolySynth().toMaster();
      part = new Tone.Part(function(time, event){
        synth.triggerAttackRelease(event.note, event.dur, time)
      }, toneArray);
      part.start(0);
      let endPos = toneArray[toneArray.length - 1].time + toneArray[toneArray.length - 1].dur;
      part.stop(endPos);
      startPlayback();
    }


    function startPlayback() {
      let startPos = barIndex || 0;
      if (!started && !paused) {
        // console.log(part);
        Tone.Transport.start('+0.5', `${startPos}:0`);
        started = true;
        toneArray = [];
      } else if (started && !paused){
        Tone.Transport.pause();
        paused = true;
        toneArray = [];
      } else if (paused) {
        let pausedPos = Tone.Transport.position;
        Tone.Transport.start('+0.5', `${pausedPos}`);
        toneArray = [];
        paused = false;
      }
    }

    function stopPlayback() {
      if (started) {
        Tone.Transport.stop();
        started = false;
        toneArray = [];
      }
    }
    // triggers print diaglogue to print score
    function printScore() {
      window.print();
    }

    // reset library with new note and voice instances
    function resetCanvas() {
      setLibrary(score.keySig, false);
      drawScore();
      bindEvents();
      _this.setState({score: score});
    }

    // score socket setup
    function socketForScore() {
      let params = {};
      if (selectedNote) {
        let selectedKeys = {};
        selectedKeys.selectedNote = processNote(selectedNote);
        selectedKeys.barIndex = barIndex;
        selectedKeys.barNoteIndex = barNoteIndex;
        selectedKeys.idMapIndex = idMapIndex;
        selectedKeys.accidental = selectedAcc;
        params.selectedKeys = selectedKeys;
      }
      params.score = score;
      processScore(params.score);
      socket.emit("new-score", JSON.stringify(params));
    }

    // strip out unnecessary values from selectedKeys to allow socket transfer
    function processNote(data) {
      let processedNote = {
        keys: data.keys,
        duration: data.duration,
        noteType: data.noteType,
        dots: data.dots
      };
      return processedNote;
    }

    // strip out unnecessary values from score to allow socket transfer
    function processScore(data) {
     // gather score data from Vex
     for (let i = 0; i < data.measures.length; i++) {
       data.measures[i].stave = {};
       for (let j = 0; j < data.measures[i].notes.length; j++) {
         data.measures[i].notes[j] = {
           id: data.measures[i].notes[j].attrs.id,
           keys: data.measures[i].notes[j].keys,
           duration: data.measures[i].notes[j].duration,
           noteType: data.measures[i].notes[j].noteType
         };
       }
     }

    //  if (data.ties) {
    //    for (let i = 0; i < data.ties.length; i++) {
    //      data.ties[i] = {
    //        endBar: data.ties[i].endBar,
    //        startBar: data.ties[i].startBar,
    //        firstNoteIndex: data.ties[i].firstNoteIndex,
    //        lastNoteIndex: data.ties[i].lastNoteIndex
    //      };
    //    }
    //  }
   }

    // calculates the current count of beats in a measure
    function setMeasureBeats(measure) {
      let totalBeats = 0;
      measure.notes.forEach((note) => {
        let beatVal = note.duration.replace('r', '');
        switch (beatVal) {
          case 'w':
            note.dots ? totalBeats += 6 : totalBeats += 4;
            break;
          case 'h':
            note.dots ? totalBeats += 3 : totalBeats += 2;
            break;
          case 'q':
            note.dots ? totalBeats += 1.5 : totalBeats += 1;
            break;
          case '8':
            note.dots ? totalBeats += .75 : totalBeats += .5;
            break;
          case '16':
            note.dots ? totalBeats += (.25 + (.25 / 2)) : totalBeats += .25;
            break;
        }
      });
      measure.beats = totalBeats;
      validateMeasures();
    }

    // sets note to a specified duration
    function setNoteDuration(durVal) {
      duration = durVal;

      selectedNote = new VF.StaveNote({clef: score.clef, keys: selectedNote.keys, duration: duration});
      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes[barNoteIndex] = selectedNote;
      score.noteIDMap[idMapIndex] = selectedId;

      setMeasureBeats(score.measures[barIndex]);
      // socketForScore();
      highlightNote();
    }

    // sets a tie to initial selection and allows use of left and right arrow keys to extend the tie
    function tieNotes() {
      if (firstTie) {
        let newTie = {};
        newTie.startBar = barIndex;
        newTie.endBar = barIndex;
        newTie.firstNoteIndex = barNoteIndex;
        newTie.lastNoteIndex = barNoteIndex;
        newTie.vfTie = new VF.StaveTie({
          first_note: score.measures[barIndex].notes[barNoteIndex],
          last_note: score.measures[barIndex].notes[barNoteIndex],
          first_indices: 0,
          last_indices: 0
        });
        score.ties.push(newTie);
        firstTie = false;
      } else {
        let newestTie = score.ties[score.ties.length - 1];
        let tieExtension = {};
        tieExtension.startBar = newestTie.startBar;
        tieExtension.endBar = barIndex;
        tieExtension.firstNoteIndex = newestTie.firstNoteIndex;
        tieExtension.lastNoteIndex = barNoteIndex;
        tieExtension.vfTie = new VF.StaveTie({
          first_note: newestTie.vfTie.first_note,
          last_note: score.measures[barIndex].notes[barNoteIndex],
          first_indices: 0,
          last_indices: 0
        });
        score.ties[score.ties.length - 1] = tieExtension;
        firstTie = true;
      }
      resetCanvas();
      highlightNote();
      // socketForScore();
    }

    // toggles clef between treble and bass
    function toggleClef() {
      if (score.clef === 'treble') {
        score.clef = 'bass';
      } else {
        score.clef = 'treble';
      }

      let count = 0;
      score.measures.forEach((measure) => {
        measure.notes.forEach((note, index, nArr) => {
          count++;
          if (note.noteType === 'r') {
            duration = `${note.duration}r`;
          } else {
            duration = note.duration;
          }
          nArr[index] = new VF.StaveNote({clef: score.clef, keys: note.keys, duration: duration});
          score.noteIDMap[count - 1] = `vf-${nArr[index].attrs.id}`;
        });
      });
      unselectNote();
      barIndex = 0;
      barNoteIndex = 0;
      selectedNote = score.measures[0].notes[0];
      selectedId = score.measures[0].notes[0].attrs.el.id;
      highlightNote();
      // socketForScore();
    }

    // toggles display of time signature options
    function toggleOptions(category) {
      const optionsContainer = document.querySelector(category);
      if (optionsContainer.classList.contains('is-hidden')) {
        optionsContainer.classList.remove('is-hidden');
      } else {
        optionsContainer.classList.add('is-hidden');
      }
    }

    // toggles chord options display by selected root note
    function toggleChordRoot(root) {
      document.querySelector('.chord-triggers-container').classList.add('is-hidden');
      let chordsWrappers = document.querySelectorAll('.chords-wrapper');
      chordsWrappers.forEach((element) => {
        if (!element.classList.contains('is-hidden')) {
          element.classList.add('is-hidden');
        }
      });
      document.querySelector(`${root}`).classList.remove('is-hidden');
    }

    // unselect a note
    function unselectNote() {
      selectedNote = null;
      barIndex = null;
      selectedId = null;
      idMapIndex = null;
      selectedNote = null;
      barNoteIndex = null;
      for (let i = 0; i < score.measures.length; i++) {
        score.measures[i].notes.forEach((note) => {
          note.setStyle({fillStyle: 'black', strokeStyle: 'black'});
        });
      }
      resetCanvas();
    }

    // updates key signature to selected option
    function updateKeySig(key) {
      setLibrary(key, true);
      score.keySig = key;

      // transpose notes to the closest value in the new key
      let count = 0;
      score.measures.forEach((measure) => {
        measure.notes.forEach((note, nIndex, nArray) => {
          if (newKey.indexOf(note) === -1) {
            count++;
            let transposedNote;
            let index = allNoteVals.indexOf(note.keys[0]);
            for (let i = index; i < allNoteVals.length - index; i++) {
              for (let j = 0; j < newKey.length; j++) {
                if (allNoteVals[i] === newKey[j].keys[0]) {
                  transposedNote = allNoteVals[i];
                  if (note.noteType === 'r') {
                    duration = `${note.duration}r`;
                  } else {
                    duration = note.duration;
                  }
                  nArray[nIndex] = new VF.StaveNote({clef: score.clef, keys: [transposedNote], duration: duration});
                  score.noteIDMap[count - 1] = `vf-${nArray[nIndex].attrs.id}`;
                  j = newKey.length;
                  i = allNoteVals.length;
                }
              }
            }
          }
        });
      });

      // setLibrary(score.keySig, false);
      toggleOptions('.key-options-container');

      unselectNote();
      barIndex = 0;
      barNoteIndex = 0;
      selectedNote = score.measures[0].notes[0];
      selectedId = score.measures[0].notes[0].attrs.el.id;
      highlightNote();
      // socketForScore();
    }

    // updates time signature to selected option
    function updateTimeSig(count, value) {
      Tone.Transport.timeSignature = [count, value];
      beatCount = count;
      beatValue = value;
      score.timeSig.count = beatCount;
      score.timeSig.value = beatValue;
      toggleOptions('.time-options-wrapper');
      validateMeasures();
    }

    // provides validation for a measure's beat value
    function validateMeasures() {
      if (score.timeSig.count === '6' && score.timeSig.value === '8') {
        score.measures.forEach((measure) => {
          if (measure.beats > beatCount / 2 || measure.beats < beatCount / 2) {
            measure.fillColor = 'red';
          } else {
            measure.fillColor = '#999999';
          }
        });
      } else {
        score.measures.forEach((measure) => {
          if (measure.beats > beatCount || measure.beats < beatCount) {
            measure.fillColor = 'red';
          } else {
            measure.fillColor = '#999999';
          }
        });
      }
      resetCanvas();
      // socketForScore();
    }

    // sets selectedNote to the specified chord
    function writeChord(chord) {
      let newChord;
      // match chord value on id
      for (let i = 0; i < chordVals.length; i++) {
        if (chord === chordVals[i].id) {
          newChord = new VF.StaveNote({clef: score.clef, keys: chordVals[i].chord.keys, duration: duration});
        }
      }

      // update value in score object
      score.measures[barIndex].notes[barNoteIndex] = newChord;
      score.noteIDMap[score.noteIDMap.indexOf(selectedId)] = `vf-${newChord.attrs.id}`;
      selectedId = `vf-${newChord.attrs.id}`;
      if (selectedNote.dots) {
        newChord.addDotToAll();
      }

      document.querySelector('.chord-triggers-container').classList.remove('is-hidden');
      let chordsWrappers = document.querySelectorAll('.chords-wrapper');
      chordsWrappers.forEach((element) => {
        if (!element.classList.contains('is-hidden')) {
          element.classList.add('is-hidden');
        }
      });

      // repaint
      selectedNote = newChord;
      toggleOptions('.chord-options-wrapper');
      resetCanvas();
      // socketForScore();
    }

    // bindEvents();
  }

  render() {

    return (
      <div id="vfDisplay" className="score-to-print is-flex"></div>
    );
  }
}

export default VFDisplay;
