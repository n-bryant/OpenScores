import React, {Component} from 'react';
import Vex from 'vexflow/releases/vexflow-min';
// import {getScale} from './helpers';
// import jQuery from '../../vendor/jquery-3.1.1.min.js';

class VFDisplay extends Component {

  // wait for page load to bring in VexFlow
  componentDidMount() {
    let pageLoad = true;
    const VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "vfDisplay".
    const vfDisplay = document.getElementById('vfDisplay');
    let renderer = new VF.Renderer(vfDisplay, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(1220, 500);
    let context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    let duration = '4';
    let noteVals = [];
    // let noteVals = getScale(scaleIWant);

    function setLibrary(key) {
      noteVals = [];
      let c3 = new VF.StaveNote({keys: ['C/3'], duration: duration});
      let cs3 = new VF.StaveNote({keys: ['C#/3'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let df3 = new VF.StaveNote({keys: ['Db/3'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let d3 = new VF.StaveNote({keys: ['D/3'], duration: duration});
      let ds3 = new VF.StaveNote({keys: ['D#/3'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let ef3 = new VF.StaveNote({keys: ['Eb/3'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let e3 = new VF.StaveNote({keys: ['E/3'], duration: duration});
      let es3 = new VF.StaveNote({keys: ['E#/3'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let ff3 = new VF.StaveNote({keys: ['Fb/3'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let f3 = new VF.StaveNote({keys: ['F/3'], duration: duration});
      let fs3 = new VF.StaveNote({keys: ['F#/3'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let gf3 = new VF.StaveNote({keys: ['Gb/3'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let g3 = new VF.StaveNote({keys: ['G/3'], duration: duration});
      let gs3 = new VF.StaveNote({keys: ['G#/3'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let af3 = new VF.StaveNote({keys: ['Ab/3'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let a3 = new VF.StaveNote({keys: ['A/3'], duration: duration});
      let as3 = new VF.StaveNote({keys: ['A#/3'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let bf3 = new VF.StaveNote({keys: ['Bb/3'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let b3 = new VF.StaveNote({keys: ['B/3'], duration: duration});
      let bs3 = new VF.StaveNote({keys: ['B#/3'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let cf4 = new VF.StaveNote({keys: ['Cb/4'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
        //notes octave C4-C5
      let c4 = new VF.StaveNote({keys: ['C/4'], duration: duration});
      let cs4 = new VF.StaveNote({keys: ['C#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let df4 = new VF.StaveNote({keys: ['Db/4'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let d4 = new VF.StaveNote({keys: ['D/4'], duration: duration});
      let ds4 = new VF.StaveNote({keys: ['D#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let ef4 = new VF.StaveNote({keys: ['Eb/4'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let e4 = new VF.StaveNote({keys: ['E/4'], duration: duration});
      let es4 = new VF.StaveNote({keys: ['E#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let ff4 = new VF.StaveNote({keys: ['Fb/4'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let f4 = new VF.StaveNote({keys: ['F/4'], duration: duration});
      let fs4 = new VF.StaveNote({keys: ['F#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let gf4 = new VF.StaveNote({keys: ['Gb/4'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let g4 = new VF.StaveNote({keys: ['G/4'], duration: duration});
      let gs4 = new VF.StaveNote({keys: ['G#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let af4 = new VF.StaveNote({keys: ['Ab/4'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let a4 = new VF.StaveNote({keys: ['A/4'], duration: duration});
      let as4 = new VF.StaveNote({keys: ['A#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let bf4 = new VF.StaveNote({keys: ['Bb/4'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let b4 = new VF.StaveNote({keys: ['B/4'], duration: duration});
      let bs4 = new VF.StaveNote({keys: ['B#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let cf5 = new VF.StaveNote({keys: ['Cb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
        //notes octave C5-C6
      let c5 = new VF.StaveNote({keys: ['C/5'], duration: duration});
      let cs5 = new VF.StaveNote({keys: ['C#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let df5 = new VF.StaveNote({keys: ['Db/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let d5 = new VF.StaveNote({keys: ['D/5'], duration: duration});
      let ds5 = new VF.StaveNote({keys: ['D#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let ef5 = new VF.StaveNote({keys: ['Eb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let e5 = new VF.StaveNote({keys: ['E/5'], duration: duration});
      let es5 = new VF.StaveNote({keys: ['E#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let ff5 = new VF.StaveNote({keys: ['Fb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let f5 = new VF.StaveNote({keys: ['F/5'], duration: duration});
      let fs5 = new VF.StaveNote({keys: ['F#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let gf5 = new VF.StaveNote({keys: ['Gb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let g5 = new VF.StaveNote({keys: ['G/5'], duration: duration});
      let gs5 = new VF.StaveNote({keys: ['G#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let af5 = new VF.StaveNote({keys: ['Ab/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let a5 = new VF.StaveNote({keys: ['A/5'], duration: duration});
      let as5 = new VF.StaveNote({keys: ['A#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let bf5 = new VF.StaveNote({keys: ['Bb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let b5 = new VF.StaveNote({keys: ['B/5'], duration: duration});
      let bs5 = new VF.StaveNote({keys: ['B#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let cf6 = new VF.StaveNote({keys: ['Cb/6'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
        //notes octave C6-C7
      let c6 = new VF.StaveNote({keys: ['C/6'], duration: duration});
      let cs6 = new VF.StaveNote({keys: ['C#/6'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let df6 = new VF.StaveNote({keys: ['Db/6'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let d6 = new VF.StaveNote({keys: ['D/6'], duration: duration});
      let ds6 = new VF.StaveNote({keys: ['D#/6'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let ef6 = new VF.StaveNote({keys: ['Eb/6'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let e6 = new VF.StaveNote({keys: ['E/6'], duration: duration});
      let es6 = new VF.StaveNote({keys: ['E#/6'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let ff6 = new VF.StaveNote({keys: ['Fb/6'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let f6 = new VF.StaveNote({keys: ['F/6'], duration: duration});
      let fs6 = new VF.StaveNote({keys: ['F#/6'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let gf6 = new VF.StaveNote({keys: ['Gb/6'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let g6 = new VF.StaveNote({keys: ['G/6'], duration: duration});
      let gs6 = new VF.StaveNote({keys: ['G#/6'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let af6 = new VF.StaveNote({keys: ['Ab/6'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let a6 = new VF.StaveNote({keys: ['A/6'], duration: duration});
      let as6 = new VF.StaveNote({keys: ['A#/6'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let bf6 = new VF.StaveNote({keys: ['Bb/6'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let b6 = new VF.StaveNote({keys: ['B/6'], duration: duration});
      let bs6 = new VF.StaveNote({keys: ['B#/6'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      let cf7 = new VF.StaveNote({keys: ['Cb/7'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let c7 = new VF.StaveNote({keys: ['C/7'], duration: duration});

      let allNoteVals = [c3, cs3, df3, d3, ds3, ef3, e3, es3, ff3, f3, fs3, gf3, g3, gs3, af3, a3, as3, bf3, b3, bs3, cf4, c4, cs4, df4, d4, ds4, ef4, e4, es4, ff4, f4, fs4, gf4, g4, gs4, af4, a4, as4, bf4, b4, bs4, cf5, c5, cs5, df5, d5, ds5, ef5, e5, es5, ff5, f5, fs5, gf5, g5, gs5, af5, a5, as5, bf5, b5, bs5, cf6, c6, cs6, df6, d6, ds6, ef6, e6, es6, ff6, f6, fs6, gf6, g6, gs6, af6, a6, as6, bf6, b6, bs6, cf7];

      //major triads
      let C5 = new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4'], duration: duration});
      let Cs5 = new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Df5 = new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let D5 = new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4'], duration: duration}).addAccidental(1, new VF.Accidental('#'));
      let Ds5 = new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('##')).addAccidental(2, new VF.Accidental('#'));
      let Ef5 = new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let E5 = new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4'], duration: duration}).addAccidental(1, new VF.Accidental('#'));
      let F5 = new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5'], duration: duration});
      let Fs5 = new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Gf5 = new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let G5 = new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5'], duration: duration});
      let Gs5 = new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Af5 = new VF.StaveNote({keys: ['Ab/4', 'C/5', 'Eb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let A5 = new VF.StaveNote({keys: ['A/4', 'C#/5', 'E/5'], duration: duration}).addAccidental(1, new VF.Accidental('#'));
      let As5 = new VF.StaveNote({keys: ['A#/4', 'C##/5', 'E#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('##')).addAccidental(2, new VF.Accidental('#'));
      let Bf5 = new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let B5 = new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5'], duration: duration}).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));

      //minor triads
      let Cm5 = new VF.StaveNote({keys: ['C/4', 'Eb/4', 'G/4'], duration: duration}).addAccidental(1, new VF.Accidental('b'));
      let Csm5 = new VF.StaveNote({keys: ['C#/4', 'E/4', 'G#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Dfm5 = new VF.StaveNote({keys: ['Db/4', 'Fb/4', 'Ab/4'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let Dm5 = new VF.StaveNote({keys: ['D/4', 'F/4', 'A/4'], duration: duration});
      let Dsm5 = new VF.StaveNote({keys: ['D#/4', 'F#/4', 'A#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Efm5 = new VF.StaveNote({keys: ['Eb/4', 'Gb/4', 'Bb/4'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let Em5 = new VF.StaveNote({keys: ['E/4', 'G/4', 'B/4'], duration: duration});
      let Fm5 = new VF.StaveNote({keys: ['F/4', 'Ab/4', 'C/5'], duration: duration}).addAccidental(1, new VF.Accidental('b'));
      let Fsm5 = new VF.StaveNote({keys: ['F#/4', 'A/4', 'C#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Gfm5 = new VF.StaveNote({keys: ['Gb/4', 'Bbb/4', 'Db/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('bb')).addAccidental(2, new VF.Accidental('b'));
      let Gm5 = new VF.StaveNote({keys: ['G/4', 'Bb/4', 'D/5'], duration: duration}).addAccidental(1, new VF.Accidental('b'));
      let Gsm5 = new VF.StaveNote({keys: ['G#/4', 'B/4', 'D#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Afm5 = new VF.StaveNote({keys: ['Ab/4', 'Cb/5', 'Eb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let Am5 = new VF.StaveNote({keys: ['A/4', 'C/5', 'E/5'], duration: duration});
      let Asm5 = new VF.StaveNote({keys: ['A#/4', 'C#/5', 'E#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Bfm5 = new VF.StaveNote({keys: ['Bb/4', 'Db/5', 'F/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b'));
      let Bm5 = new VF.StaveNote({keys: ['B/4', 'D/5', 'F#/5'], duration: duration}).addAccidental(2, new VF.Accidental('#'));

      //dominant seven chords
      let C7 = new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4', 'Bb/4'], duration: duration}).addAccidental(3, new VF.Accidental('b'));
      let Cs7 = new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4', 'B/4'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Df7 = new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4', 'Cb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let D7 = new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4', 'C/5'], duration: duration}).addAccidental(1, new VF.Accidental('#'));
      let Ds7 = new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4', 'C#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('##')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let Ef7 = new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4', 'Db/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let E7 = new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4', 'D/5'], duration: duration}).addAccidental(1, new VF.Accidental('#'));
      let F7 = new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5', 'Eb/5'], duration: duration}).addAccidental(3, new VF.Accidental('b'));
      let Fs7 = new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5', 'E/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Gf7 = new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5', 'Fb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let G7 = new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5', 'F/5'], duration: duration});
      let Gs7 = new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5', 'F#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let Af7 = new VF.StaveNote({keys: [ 'Ab/4', 'C/5', 'Eb/5', 'Gb/5' ], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let A7 = new VF.StaveNote({keys: [ 'A/4', 'C#/5', 'E/5', 'G/5' ], duration: duration}).addAccidental(1, new VF.Accidental('#'));
      let As7 = new VF.StaveNote({keys: [ 'A#/4', 'C##/5', 'E#/5', 'G#/5' ], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('##')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let Bf7 = new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5', 'Ab/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let B7 = new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5', 'A/5'], duration: duration}).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      //Major seven chords
      let CMaj7 = new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4', 'B/4'], duration: duration});
      let CsMaj7 = new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4', 'B#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let DfMaj7 = new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4', 'C/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let DMaj7 = new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4', 'C#/5'], duration: duration}).addAccidental(1, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let DsMaj7 = new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4', 'C##/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('##')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('##'));
      let EfMaj7 = new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4', 'D/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let EMaj7 = new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4', 'D#/5'], duration: duration}).addAccidental(1, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let FMaj7 = new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5', 'E/5'], duration: duration});
      let FsMaj7 = new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5', 'E#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let GfMaj7 = new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5', 'F/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let GMaj7 = new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5', 'F#/5'], duration: duration}).addAccidental(3, new VF.Accidental('#'));
      let GsMaj7 = new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5', 'F##/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('##'));
      let AfMaj7 = new VF.StaveNote({keys: [ 'Ab/4', 'C/5', 'Eb/5', 'G/5' ], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b'));
      let AMaj7 = new VF.StaveNote({keys: [ 'A/4', 'C#/5', 'E/5', 'G#/5' ], duration: duration}).addAccidental(1, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let AsMaj7 = new VF.StaveNote({keys: [ 'A#/4', 'C##/5', 'E#/5', 'G##/5' ], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('##')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('##'));
      let BfMaj7 = new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5', 'A/5'], duration: duration}).addAccidental(0, new VF.Accidental('b'));
      let BMaj7 = new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5', 'A#/5'], duration: duration}).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));

      //minor seven chords
      let Cmin7 = new VF.StaveNote({keys: ['C/4', 'Eb/4', 'G/4', 'Bb/4'], duration: duration}).addAccidental(1, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let Csmin7 = new VF.StaveNote({keys: ['C#/4', 'E/4', 'G#/4', 'B/4'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Dfmin7 = new VF.StaveNote({keys: ['Db/4', 'Fb/4', 'Ab/4', 'Cb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let Dmin7 = new VF.StaveNote({keys: ['D/4', 'F/4', 'A/4', 'C/5'], duration: duration});
      let Dsmin7 = new VF.StaveNote({keys: ['D#/4', 'F#/4', 'A#/4', 'C#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let Efmin7 = new VF.StaveNote({keys: ['Eb/4', 'Gb/4', 'Bb/4', 'Db/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let Emin7 = new VF.StaveNote({keys: ['E/4', 'G/4', 'B/4', 'D/5'], duration: duration});
      let Fmin7 = new VF.StaveNote({keys: ['F/4', 'Ab/4', 'C/5', 'Eb/5'], duration: duration}).addAccidental(1, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let Fsmin7 = new VF.StaveNote({keys: ['F#/4', 'A/4', 'C#/5', 'E/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#'));
      let Gfmin7 = new VF.StaveNote({keys: ['Gb/4', 'Bbb/4', 'Db/5', 'Fb/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('bb')).addAccidental(2, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let Gmin7 = new VF.StaveNote({keys: ['G/4', 'Bb/4', 'D/5', 'F/5'], duration: duration}).addAccidental(1, new VF.Accidental('b'));
      let Gsmin7 = new VF.StaveNote({keys: ['G#/4', 'B/4', 'D#/5', 'F#/5'], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let Afmin7 = new VF.StaveNote({keys: [ 'Ab/4', 'Cb/5', 'Eb/5', 'Gb/5' ], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(2, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let Amin7 = new VF.StaveNote({keys: [ 'A/4', 'C/5', 'E/5', 'G/5' ], duration: duration});
      let Asmin7 = new VF.StaveNote({keys: [ 'A#/4', 'C#/5', 'E#/5', 'G#/5' ], duration: duration}).addAccidental(0, new VF.Accidental('#')).addAccidental(1, new VF.Accidental('#')).addAccidental(2, new VF.Accidental('#')).addAccidental(3, new VF.Accidental('#'));
      let Bfmin7 = new VF.StaveNote({keys: ['Bb/4', 'Db/5', 'F/5', 'Ab/5'], duration: duration}).addAccidental(0, new VF.Accidental('b')).addAccidental(1, new VF.Accidental('b')).addAccidental(3, new VF.Accidental('b'));
      let Bmin7 = new VF.StaveNote({keys: ['B/4', 'D/5', 'F#/5', 'A/5'], duration: duration}).addAccidental(2, new VF.Accidental('#'));

      //major scales
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

      //minor scales
      let aminScale = [c3, d3, e3, f3, g3, a3, b3, c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5, a5, b5, c6, d6, e6, f6, g6, a6, b6, c7];
      let eminScale = [c3, d3, e3, fs3, g3, a3, b3, c4, d4, e4, fs4, g4, a4, b4, c5, d5, e5, fs5, g5, a5, b5, c6, d6, e6, fs6, g6, a6, b6, c7];
      let bminScale = [cs3, d3, e3, fs3, g3, a3, b3, cs4, d4, e4, fs4, g4, a4, b4, cs5, d5, e5, fs5, g5, a5, b5, cs6, d6, e6, fs6, g6, a6, b6];
      let fsminScale = [cs3, d3, e3, fs3, gs3, a3, b3, cs4, d4, e4, fs4, gs4, a4, b4, cs5, d5, e5, fs5, gs5, a5, b5, cs6, d6, e6, fs6, gs6, a6, b6];
      let csminScale = [cs3, ds3, e3, fs3, gs3, a3, b3, cs4, ds4, e4, fs4, gs4, a4, b4, cs5, ds5, e5, fs5, gs5, a5, b5, cs6, ds6, e6, fs6, gs6, a6, b6];
      let gsminScale = [cs3, ds3, e3, fs3, gs3, as3, b3, cs4, ds4, e4, fs4, gs4, as4, b4, cs5, ds5, e5, fs5, gs5, as5, b5, cs6, ds6, e6, fs6, gs6, as6, b6];
      let dsminScale = [cs3, ds3, es3, fs3, gs3, as3, b3, cs4, ds4, es4, fs4, gs4, as4, b4, cs5, ds5, es5, fs5, gs5, as5, b5, cs6, ds6, es6, fs6, gs6, as6, b6];

      let dminScale = [c3, d3, e3, f3, g3, a3, bf3, c4, d4, e4, f4, g4, a4, bf4, c5, d5, e5, f5, g5, a5, bf5, c6, d6, e6, f6, g6, a6, bf6, c7];
      let gfminScale = [c3, d3, ef3, f3, g3, a3, bf3, c4, d4, ef4, f4, g4, a4, bf4, c5, d5, ef5, f5, g5, a5, bf5, c6, d6, ef6, g6, a6, bf6, c7];
      let cminScale = [c3, d3, ef3, f3, g3, af3, bf3, c4, d4, ef4, f4, g4, af4, bf4, c5, d5, ef5, f5, g5, af5, bf5, c6, d6, ef6, g6, af6, bf6, c7];
      let fminScale = [c3, df3, ef3, f3, g3, af3, bf3, c4, df4, ef4, f4, g4, af4, bf4, c5, df5, ef5, f5, g5, af5, bf5, c6, df6, ef6, g6, af6, bf6, c7];
      let bfminScale = [c3, df3, ef3, f3, gf3, af3, bf3, c4, df4, ef4, f4, gf4, af4, bf4, c5, df5, ef5, f5, gf5, af5, bf5, c6, df6, ef6, gf6, af6, bf6, c7];
      let efminScale = [df3, ef3, f3, gf3, af3, bf3, cf4, df4, ef4, f4, gf4, af4, bf4, cf5, df5, ef5, f5, gf5, af5, bf5, cf6, df6, ef6, gf6, af6, bf6, cf7];

      // console.log(scale);
      switch (key) {
        case 'C':
          cMajScale.forEach((note) => {
            noteVals.push(note);
          });
          break;
        case 'D':
          dMajScale.forEach((note) => {
            noteVals.push(note);
          });
          break;
        case 'E':
          eMajScale.forEach((note) => {
            noteVals.push(note);
          });
          break;
        case 'F':
          fMajScale.forEach((note) => {
            noteVals.push(note);
          });
          break;
        case 'G':
          gMajScale.forEach((note) => {
            noteVals.push(note);
          });
          break;
        case 'A':
          aMajScale.forEach((note) => {
            noteVals.push(note);
          });
          break;
        case 'B':
          bMajScale.forEach((note) => {
            noteVals.push(note);
          });
          break;
      }
    }

    // declaration of base score values
    let beatCount = 4;
    let beatValue = 4;
    let barIndex = null;
    let firstTie = true;
    let selectedId = null;
    let idMapIndex = null;
    let selectedNote = null;
    let barNoteIndex = null;

    let score = {
      title: 'Score Title',
      keySig: 'C',
      timeSig: {count: beatCount, value: beatValue},
      clef: 'treble',
      measures: [],
      noteIDMap: []
    }

    console.log(score);

    setLibrary(score.keySig);

    let staveX = 0;
    let staveY = 0;
    let staveWidth = 300;

    newMeasure();
    drawScore();

    // draw a bar for each measure to the canvas
    function drawScore() {
      // clear anything on the canvas
      context.clear();

      for (let i = 0; i < score.measures.length; i++) {
        let x = score.measures[i].staveX;
        let y = score.measures[i].staveY;
        let fill = score.measures[i].fillColor;

        if (i === 0) {
          // add a clef, key, and time signature to first bar.
          score.measures[i].stave = new VF.Stave(x, y, staveWidth, { fill_style: fill});
          score.measures[i].stave.addClef("treble").addTimeSignature(`${score.timeSig.count}/${score.timeSig.value}`);
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

        score.measures[i].ties.forEach(function(tie) {tie.setContext(context).draw()});
      }
    }

    // bind events
    function bindEvents() {
      bindNotes();

      if (pageLoad) {
        // print button
        document.querySelector('.print-btn').addEventListener('click', () => {
          printScore();
        });

        // add measure button
        document.querySelector('.add-measure-btn').addEventListener('click', () => {
          addMeasure();
        });

        // key signature button
        document.querySelector('.key-sig-btn').addEventListener('click', () => {
          updateKeySig();
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

        // tie notes button
        document.querySelector('.tie-btn').addEventListener('click', function() {
          if (selectedNote) {
            tieNotes();
            // do I want this as a toggle or have user click button once, set first index, and then again to set second index?
            // is there a way to wait for a secondary click while tieNotes is running?
          }
        });

        // time signature button
        document.querySelector('.time-sig-btn').addEventListener('click', () => {
          toggleTimeOptions();
        });

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
      selectedNote = new VF.StaveNote({clef: "treble", keys: selectedNote.keys, duration: duration})
        .addAccidental(0, new VF.Accidental(accidental));
      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes[barNoteIndex] = selectedNote;
      score.noteIDMap[idMapIndex] = selectedId;

      resetCanvas();
      highlightNote();
    }

    // inserts a measure at the end of the score
    function addMeasure() {
      newMeasure();
      resetCanvas();
    }

    // increase note value on up arrow
    function changePitch(key) {
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
      selectedNote = newPitch;
      resetCanvas();
      highlightNote();
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

    // copy selected note and paste copy next to it
    function copyNote() {
      let pitchVal = selectedNote.keys;
      let durVal = selectedNote.duration;

      selectedNote = new VF.StaveNote({clef: "treble", keys: pitchVal, duration: durVal});
      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes.splice(barNoteIndex, 0, selectedNote);
      score.noteIDMap.splice(idMapIndex, 0, selectedId);

      setMeasureBeats(score.measures[barIndex]);
      highlightNote();
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
        unselectNote();
      }
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
            duration = selectedNote.duration;
            barNoteIndex = score.measures[barIndex].notes.indexOf(selectedNote);
            idMapIndex = score.noteIDMap.indexOf(selectedId);
          }
        }
      }

      highlightNote();
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
      let highlightedNote = score.measures[barIndex].notes[score.measures[barIndex].notes.indexOf(selectedNote)];
      highlightedNote.setStyle({fillStyle: blueAccent, strokeStyle: blueAccent});
      resetCanvas();
    }

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
          tempBar.notes[i] = new VF.StaveNote({clef: "treble", keys: noteVals[7].keys, duration: "q"});
          score.noteIDMap.push(`vf-${tempBar.notes[i].attrs.id}`);
        }
      } else {
        for (let i = 0; i < beatCount; i++) {
          tempBar.notes[i] = new VF.StaveNote({clef: "treble", keys: noteVals[7].keys, duration: "q"});
          score.noteIDMap.push(`vf-${tempBar.notes[i].attrs.id}`);
        }
      }

      score.measures.push(tempBar);
      let newestStave = score.measures[score.measures.length - 1];
      setMeasureBeats(newestStave);
    }

    // triggers print diaglogue to print score
    function printScore() {
      window.print();
    }

    // reset library with new note and voice instances
    function resetCanvas() {
      setLibrary(score.keySig);
      drawScore();
      bindEvents();
    }

    // calculates the current count of beats in a measure
    function setMeasureBeats(measure) {
      let totalBeats = 0;
      measure.notes.forEach((note) => {
        let beatVal = note.duration.replace('r', '');
        switch (beatVal) {
          case 'w':
            totalBeats += 4;
            break;
          case 'h':
            totalBeats += 2;
            break;
          case 'q':
            totalBeats += 1;
            break;
          case '8':
            totalBeats += .5;
            break;
          case '16':
            totalBeats += .25;
            break;
        }
      });
      measure.beats = totalBeats;
      validateMeasures();
    }

    // sets note to a specified duration
    function setNoteDuration(durVal) {
      duration = durVal;

      selectedNote = new VF.StaveNote({clef: "treble", keys: selectedNote.keys, duration: duration});
      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes[barNoteIndex] = selectedNote;
      score.noteIDMap[idMapIndex] = selectedId;

      setMeasureBeats(score.measures[barIndex]);
      highlightNote();
    }

    // sets a tie to initial selection and allows use of left and right arrow keys to extend the tie
    function tieNotes() {
      if (firstTie) {
        let newTie = new VF.StaveTie({
          first_note: score.measures[barIndex].notes[barNoteIndex],
          last_note: score.measures[barIndex].notes[barNoteIndex],
          first_indices: [0],
          last_indices: [0]
        });
        score.measures[barIndex].ties.push(newTie);
        firstTie = false;
      } else {
        let tieExtension = new VF.StaveTie({
          first_note: score.measures[barIndex].ties[0].first_note,
          last_note: score.measures[barIndex].notes[barNoteIndex],
          first_indices: [0],
          last_indices: [0]
        });
        score.measures[barIndex].ties[0] = (tieExtension);
        firstTie = true;
      }

      resetCanvas();
      highlightNote();
    }

    // toggles display of time signature options
    function toggleTimeOptions() {
      const timeOptionsContainer = document.querySelector('.time-options-container')
      if (timeOptionsContainer.classList.contains('is-hidden')) {
        timeOptionsContainer.classList.remove('is-hidden');
      } else {
        timeOptionsContainer.classList.add('is-hidden');
      }
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
    function updateKeySig() {
      // render key on page by setting score.key value and tying that to VF
      // deal with how that might affect notes on the page that weren't in that key
    }

    // updates time signature to selected option
    function updateTimeSig(count, value) {
      beatCount = count;
      beatValue = value;
      score.timeSig.count = beatCount;
      score.timeSig.value = beatValue;
      resetCanvas();
      validateMeasures();
      if (selectedNote) {
        highlightNote();
      }
    }

    // provides validation for a measure's beat value
    function validateMeasures() {
      if (score.timeSig.count === '6' && score.timeSig.value === '8') {
        score.measures.forEach((measure) => {
          if (measure.beats > beatCount / 2 || measure.beats < beatCount / 2) {
            measure.fillColor = '#FF7800';
            resetCanvas();
          } else {
            measure.fillColor = '#999999';
            resetCanvas();
          }
        });
      } else {
        score.measures.forEach((measure) => {
          if (measure.beats > beatCount || measure.beats < beatCount) {
            measure.fillColor = '#FF7800';
            resetCanvas();
          } else {
            measure.fillColor = '#999999';
            resetCanvas();
          }
        });
      }
    }

    bindEvents();
  }

  render() {

    return (
      <div id="vfDisplay" className="score-to-print is-flex"></div>
    );
  }
}

export default VFDisplay;
