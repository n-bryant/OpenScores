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

    function setLibrary() {
      noteVals = [];

      let Cs7 = new VF.StaveNote({
        keys: [
          'C#/4', 'E#/4', 'G#/4', 'B/4'
        ],
        duration: duration
      });

      let Df7 = new VF.StaveNote({
        keys: [
          'Db/4', 'F/4', 'Ab/4', 'Cb/5'
        ],
        duration: duration
      });

      let D7 = new VF.StaveNote({
        keys: [
          'D/4', 'F#/4', 'A/4', 'C/5'
        ],
        duration: duration
      });

      let Ds7 = new VF.StaveNote({
        keys: [
          'D#/4', 'F##/4', 'A#/4', 'C#/5'
        ],
        duration: duration
      });

      let Ef7 = new VF.StaveNote({
        keys: [
          'Eb/4', 'G/4', 'Bb/4', 'Db/5'
        ],
        duration: duration
      });

      let E7 = new VF.StaveNote({
        keys: [
          'E/4', 'G#/4', 'B/4', 'D/5'
        ],
        duration: duration
      });

      let F7 = new VF.StaveNote({
        keys: [
          'F/4', 'A/4', 'C/5', 'Eb/5'
        ],
        duration: duration
      });

      let Fs7 = new VF.StaveNote({
        keys: [
          'F#/4', 'A#/4', 'C#/5', 'E/5'
        ],
        duration: duration
      });

      let Gf7 = new VF.StaveNote({
        keys: [
          'Gb/4', 'Bb/4', 'Db/5', 'Fb/5'
        ],
        duration: duration
      });

      let G7 = new VF.StaveNote({
        keys: [
          'G/4', 'B/4', 'D/5', 'F/5'
        ],
        duration: duration
      });

      let Gs7 = new VF.StaveNote({
        keys: [
          'G#/4', 'B#/4', 'D#/5', 'F#/5'
        ],
        duration: duration
      });

      let Af7 = new VF.StaveNote({
        keys: [
          'Ab/4', 'C/5', 'Eb/5', 'Gb/5'
        ],
        duration: duration
      });

      let A7 = new VF.StaveNote({
        keys: [
          'A/4', 'C#/5', 'E/5', 'G/5'
        ],
        duration: duration
      });

      let As7 = new VF.StaveNote({
        keys: [
          'A#/4', 'C##/5', 'E#/5', 'G#/5'
        ],
        duration: duration
      });

      let Bf7 = new VF.StaveNote({
        keys: [
          'Bb/4', 'D/5', 'F/5', 'Ab/5'
        ],
        duration: duration
      });

      let B7 = new VF.StaveNote({
        keys: [
          'B/4', 'D#/5', 'F#/5', 'A/5'
        ],
        duration: duration
      });

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

      // console.log(scale);
      cMajScale.forEach((note) => {
        noteVals.push(note);
      });
    }
    setLibrary();

    // declaration of base score values
    let beatCount = 4;
    let beatValue = 4;
    let barIndex = null;
    let selectedId = null;
    let idMapIndex = null;
    let selectedNote = null;
    let barNoteIndex = null;

    let score = {
      title: 'Score Title',
      keySig: 'CMaj',
      timeSig: '4/4',
      clef: 'treble',
      measures: [],
      noteIDMap: []
    }

    let staveX = 0;
    let staveY = 0;
    let staveWidth = 300;

    // REMOVE THESE AFTER FIXING THEIR DEPENDENCIES!!!!
    // let measures = [];
    // let selectedBarId = null;
    // let selectedBeatId = null;

    newMeasure();
    drawScore();

    // draw a bar for each measure to the canvas
    function drawScore() {
      // clear anything on the canvas
      context.clear();

      for (let i = 0; i < score.measures.length; i++) {
        if (i === 0) {
          // create a stave of width 300 at position 10, 40 on the canvas.
          score.measures[i].stave = new VF.Stave(staveX, staveY, staveWidth);

          // add a clef and time signature to first bar.
          score.measures[i].stave.addClef("treble").addTimeSignature("4/4");
        } else if (i % 4 === 0) {
          score.measures[i].stave = new VF.Stave(staveX, score.measures[i - 1].stave.y + 100, staveWidth);
        } else {
          score.measures[i].stave = new VF.Stave(score.measures[i - 1].stave.width + score.measures[i - 1].stave.x, staveY, staveWidth);
        }

        // draw staves and notes
        score.measures[i].stave.setContext(context).draw();
        VF.Formatter.FormatAndDraw(context, score.measures[i].stave, score.measures[i].notes);
      }
    }

    // bind events
    function bindEvents() {
      bindNotes();

      if (pageLoad) {
        document.querySelector('.add-measure-btn').addEventListener('click', () => {
          addMeasure();
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
        } else if (e.keyCode === 27) {
          // escape key
          e.preventDefault();
          unselectNote();
        }
      }
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

    // replace selected note with rest of same duration
    function deleteNote() {
      let pitchVal = selectedNote.keys;
      if (!duration.includes('r')) {
        duration += 'r';
        selectedNote = new VF.StaveNote({clef: "treble", keys: pitchVal, duration: duration});
        selectedId = `vf-${selectedNote.attrs.id}`;
        score.measures[barIndex].notes[barNoteIndex] = selectedNote;
        score.noteIDMap[idMapIndex] = selectedId;
      }
      resetCanvas();
      highlightNote();
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

    // reset library with new note and voice instances
    function resetCanvas() {
      setLibrary();
      drawScore();
      bindEvents();
    }

    // Creates a new default measure
    function newMeasure() {
      let tempBar = {};
      tempBar.stave = new VF.Stave(staveX, staveY, staveWidth);
      tempBar.notes = [];
      for (let i = 0; i < beatCount; i++) {
        tempBar.notes[i] = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"});
        score.noteIDMap.push(`vf-${tempBar.notes[i].attrs.id}`);
      }
      score.measures.push(tempBar);
    }

    // unselect a note
    function unselectNote() {
      selectedNote = null;
      for (let i = 0; i < score.measures.length; i++) {
        score.measures[i].notes.forEach((note) => {
          note.setStyle({fillStyle: 'black', strokeStyle: 'black'});
        });
      }
      resetCanvas();
    }

    bindEvents();
  }

  render() {

    return (
      <div id="vfDisplay" className="is-flex"></div>
    );
  }
}

export default VFDisplay;
