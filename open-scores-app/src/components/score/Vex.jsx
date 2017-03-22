import React, {Component} from 'react';
import Vex from 'vexflow/releases/vexflow-min';
import Tone from 'tone';
import $ from 'jquery';


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
    let allNoteVals = [];
    let noteVals = [];
    let newKey = [];

    // initializes new instances of VF StaveNotes
    function setLibrary(key, changing) {
      noteVals = [];
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
      let C5 = new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4'], duration: duration});
      let Cs5 = new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4'], duration: duration});
      let Df5 = new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4'], duration: duration});
      let D5 = new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4'], duration: duration});
      let Ds5 = new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4'], duration: duration});
      let Ef5 = new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4'], duration: duration});
      let E5 = new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4'], duration: duration});
      let F5 = new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5'], duration: duration});
      let Fs5 = new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5'], duration: duration});
      let Gf5 = new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5'], duration: duration});
      let G5 = new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5'], duration: duration});
      let Gs5 = new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5'], duration: duration});
      let Af5 = new VF.StaveNote({keys: ['Ab/4', 'C/5', 'Eb/5'], duration: duration});
      let A5 = new VF.StaveNote({keys: ['A/4', 'C#/5', 'E/5'], duration: duration});
      let As5 = new VF.StaveNote({keys: ['A#/4', 'C##/5', 'E#/5'], duration: duration});
      let Bf5 = new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5'], duration: duration});
      let B5 = new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5'], duration: duration});

      //minor triads
      let Cm5 = new VF.StaveNote({keys: ['C/4', 'Eb/4', 'G/4'], duration: duration});
      let Csm5 = new VF.StaveNote({keys: ['C#/4', 'E/4', 'G#/4'], duration: duration});
      let Dfm5 = new VF.StaveNote({keys: ['Db/4', 'Fb/4', 'Ab/4'], duration: duration});
      let Dm5 = new VF.StaveNote({keys: ['D/4', 'F/4', 'A/4'], duration: duration});
      let Dsm5 = new VF.StaveNote({keys: ['D#/4', 'F#/4', 'A#/4'], duration: duration});
      let Efm5 = new VF.StaveNote({keys: ['Eb/4', 'Gb/4', 'Bb/4'], duration: duration});
      let Em5 = new VF.StaveNote({keys: ['E/4', 'G/4', 'B/4'], duration: duration});
      let Fm5 = new VF.StaveNote({keys: ['F/4', 'Ab/4', 'C/5'], duration: duration});
      let Fsm5 = new VF.StaveNote({keys: ['F#/4', 'A/4', 'C#/5'], duration: duration});
      let Gfm5 = new VF.StaveNote({keys: ['Gb/4', 'Bbb/4', 'Db/5'], duration: duration});
      let Gm5 = new VF.StaveNote({keys: ['G/4', 'Bb/4', 'D/5'], duration: duration});
      let Gsm5 = new VF.StaveNote({keys: ['G#/4', 'B/4', 'D#/5'], duration: duration});
      let Afm5 = new VF.StaveNote({keys: ['Ab/4', 'Cb/5', 'Eb/5'], duration: duration});
      let Am5 = new VF.StaveNote({keys: ['A/4', 'C/5', 'E/5'], duration: duration});
      let Asm5 = new VF.StaveNote({keys: ['A#/4', 'C#/5', 'E#/5'], duration: duration});
      let Bfm5 = new VF.StaveNote({keys: ['Bb/4', 'Db/5', 'F/5'], duration: duration});
      let Bm5 = new VF.StaveNote({keys: ['B/4', 'D/5', 'F#/5'], duration: duration});

      //dominant seven chords
      let C7 = new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4', 'Bb/4'], duration: duration});
      let Cs7 = new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4', 'B/4'], duration: duration});
      let Df7 = new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4', 'Cb/5'], duration: duration});
      let D7 = new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4', 'C/5'], duration: duration});
      let Ds7 = new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4', 'C#/5'], duration: duration});
      let Ef7 = new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4', 'Db/5'], duration: duration});
      let E7 = new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4', 'D/5'], duration: duration});
      let F7 = new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5', 'Eb/5'], duration: duration});
      let Fs7 = new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5', 'E/5'], duration: duration});
      let Gf7 = new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5', 'Fb/5'], duration: duration});
      let G7 = new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5', 'F/5'], duration: duration});
      let Gs7 = new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5', 'F#/5'], duration: duration});
      let Af7 = new VF.StaveNote({keys: [ 'Ab/4', 'C/5', 'Eb/5', 'Gb/5' ], duration: duration});
      let A7 = new VF.StaveNote({keys: [ 'A/4', 'C#/5', 'E/5', 'G/5' ], duration: duration});
      let As7 = new VF.StaveNote({keys: [ 'A#/4', 'C##/5', 'E#/5', 'G#/5' ], duration: duration});
      let Bf7 = new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5', 'Ab/5'], duration: duration});
      let B7 = new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5', 'A/5'], duration: duration});
      //Major seven chords
      let CMaj7 = new VF.StaveNote({keys: ['C/4', 'E/4', 'G/4', 'B/4'], duration: duration});
      let CsMaj7 = new VF.StaveNote({keys: ['C#/4', 'E#/4', 'G#/4', 'B#/4'], duration: duration});
      let DfMaj7 = new VF.StaveNote({keys: ['Db/4', 'F/4', 'Ab/4', 'C/5'], duration: duration});
      let DMaj7 = new VF.StaveNote({keys: ['D/4', 'F#/4', 'A/4', 'C#/5'], duration: duration});
      let DsMaj7 = new VF.StaveNote({keys: ['D#/4', 'F##/4', 'A#/4', 'C##/5'], duration: duration});
      let EfMaj7 = new VF.StaveNote({keys: ['Eb/4', 'G/4', 'Bb/4', 'D/5'], duration: duration});
      let EMaj7 = new VF.StaveNote({keys: ['E/4', 'G#/4', 'B/4', 'D#/5'], duration: duration});
      let FMaj7 = new VF.StaveNote({keys: ['F/4', 'A/4', 'C/5', 'E/5'], duration: duration});
      let FsMaj7 = new VF.StaveNote({keys: ['F#/4', 'A#/4', 'C#/5', 'E#/5'], duration: duration});
      let GfMaj7 = new VF.StaveNote({keys: ['Gb/4', 'Bb/4', 'Db/5', 'F/5'], duration: duration});
      let GMaj7 = new VF.StaveNote({keys: ['G/4', 'B/4', 'D/5', 'F#/5'], duration: duration});
      let GsMaj7 = new VF.StaveNote({keys: ['G#/4', 'B#/4', 'D#/5', 'F##/5'], duration: duration});
      let AfMaj7 = new VF.StaveNote({keys: [ 'Ab/4', 'C/5', 'Eb/5', 'G/5' ], duration: duration});
      let AMaj7 = new VF.StaveNote({keys: [ 'A/4', 'C#/5', 'E/5', 'G#/5' ], duration: duration});
      let AsMaj7 = new VF.StaveNote({keys: [ 'A#/4', 'C##/5', 'E#/5', 'G##/5' ], duration: duration});
      let BfMaj7 = new VF.StaveNote({keys: ['Bb/4', 'D/5', 'F/5', 'A/5'], duration: duration});
      let BMaj7 = new VF.StaveNote({keys: ['B/4', 'D#/5', 'F#/5', 'A#/5'], duration: duration});

      //minor seven chords
      let Cmin7 = new VF.StaveNote({keys: ['C/4', 'Eb/4', 'G/4', 'Bb/4'], duration: duration});
      let Csmin7 = new VF.StaveNote({keys: ['C#/4', 'E/4', 'G#/4', 'B/4'], duration: duration});
      let Dfmin7 = new VF.StaveNote({keys: ['Db/4', 'Fb/4', 'Ab/4', 'Cb/5'], duration: duration});
      let Dmin7 = new VF.StaveNote({keys: ['D/4', 'F/4', 'A/4', 'C/5'], duration: duration});
      let Dsmin7 = new VF.StaveNote({keys: ['D#/4', 'F#/4', 'A#/4', 'C#/5'], duration: duration});
      let Efmin7 = new VF.StaveNote({keys: ['Eb/4', 'Gb/4', 'Bb/4', 'Db/5'], duration: duration});
      let Emin7 = new VF.StaveNote({keys: ['E/4', 'G/4', 'B/4', 'D/5'], duration: duration});
      let Fmin7 = new VF.StaveNote({keys: ['F/4', 'Ab/4', 'C/5', 'Eb/5'], duration: duration});
      let Fsmin7 = new VF.StaveNote({keys: ['F#/4', 'A/4', 'C#/5', 'E/5'], duration: duration});
      let Gfmin7 = new VF.StaveNote({keys: ['Gb/4', 'Bbb/4', 'Db/5', 'Fb/5'], duration: duration});
      let Gmin7 = new VF.StaveNote({keys: ['G/4', 'Bb/4', 'D/5', 'F/5'], duration: duration});
      let Gsmin7 = new VF.StaveNote({keys: ['G#/4', 'B/4', 'D#/5', 'F#/5'], duration: duration});
      let Afmin7 = new VF.StaveNote({keys: [ 'Ab/4', 'Cb/5', 'Eb/5', 'Gb/5' ], duration: duration});
      let Amin7 = new VF.StaveNote({keys: [ 'A/4', 'C/5', 'E/5', 'G/5' ], duration: duration});
      let Asmin7 = new VF.StaveNote({keys: [ 'A#/4', 'C#/5', 'E#/5', 'G#/5' ], duration: duration});
      let Bfmin7 = new VF.StaveNote({keys: ['Bb/4', 'Db/5', 'F/5', 'Ab/5'], duration: duration});
      let Bmin7 = new VF.StaveNote({keys: ['B/4', 'D/5', 'F#/5', 'A/5'], duration: duration});

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
      ties: [],
      noteIDMap: []
    }

    let toneArray = [];

    setLibrary(score.keySig, false);

    let staveX = 0;
    let staveY = 0;
    let staveWidth = 300;

    newMeasure();
    drawScore();

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
        // print button
        document.querySelector('.print-btn').addEventListener('click', () => {
          printScore();
        });

        // add measure button
        document.querySelector('.add-measure-btn').addEventListener('click', () => {
          addMeasure();
        });

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
      selectedNote = new VF.StaveNote({clef: score.clef, keys: selectedNote.keys, duration: duration})
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
      unselectNote();
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
      let durVal = selectedNote.duration;

      selectedNote = new VF.StaveNote({clef: score.clef, keys: pitchVal, duration: durVal});
      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes.splice(barNoteIndex, 0, selectedNote);
      score.noteIDMap.splice(idMapIndex, 0, selectedId);

      setMeasureBeats(score.measures[barIndex]);
      highlightNote();
    }

    function convertVexToTone() {
      // console.log(score.measures);
      // console.log(toneArray);
      score.measures.forEach((measure) => {
        measure.notes.forEach((note) => {
          // console.log(note);
          let pitch = note.keys[0].replace('/', '');
          let tempObj = {};
          tempObj.dur = note.duration;
          tempObj.note = pitch;
          tempObj.time = '0:';
          // if (note.noteType === 'r') {
          //   console.log(note);
          //   tempObj.note = '';
          // }
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
        unselectNote();
      }
    }

    // add dot to note
    function dotNote() {
      if (!selectedNote.dots) {
        selectedNote = new VF.StaveNote({clef: score.clef, keys: selectedNote.keys, duration: selectedNote.duration}).addDotToAll();
      } else {
        selectedNote = new VF.StaveNote({clef: score.clef, keys: selectedNote.keys, duration: selectedNote.duration});
      }

      selectedId = `vf-${selectedNote.attrs.id}`;
      score.measures[barIndex].notes[barNoteIndex] = selectedNote;
      score.noteIDMap[idMapIndex] = selectedId;
      setMeasureBeats(score.measures[barIndex]);
      highlightNote();
    }

    function formatToneArr() {
      let timeVal = 0;
      let toneDur = 0;
      toneArray.forEach((obj, index) => {
        if (index === 0) {
          obj.time = '0';
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
      // console.log(arr);
      playSound();
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
      // setTransportStart(barIndex);
      highlightNote();
    }

    // function setTransportStart(start) {
    //   if (start) {
    //     Tone.Transport.
    //
    //   }
    // }

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

    function playSound() {
      let started = false;
      let synth = new Tone.PolySynth().toMaster();
      Tone.Transport.bpm.value = 120;

      let part = new Tone.Part(function(time, event){
        synth.triggerAttackRelease(event.note, event.dur, time)
      }, toneArray);

      part.start(0);
      console.log(barIndex);
      Tone.Transport.start('+0.5', `${barIndex}:0`);

      toneArray = [];
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
      highlightNote();
    }

    // sets a tie to initial selection and allows use of left and right arrow keys to extend the tie
    function tieNotes() {
      if (firstTie) {
        let newTie = {};
        newTie.startBar = barIndex;
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
          nArr[index] = new VF.StaveNote({clef: score.clef, keys: note.keys, duration: note.duration});
          score.noteIDMap[count - 1] = `vf-${nArr[index].attrs.id}`;
        });
      });
      unselectNote();
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
                  nArray[nIndex] = new VF.StaveNote({clef: score.clef, keys: [transposedNote], duration: note.duration});
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
      resetCanvas();
      toggleOptions('.key-options-container');
    }

    // updates time signature to selected option
    function updateTimeSig(count, value) {
      Tone.Transport.timeSignature = [count, value];
      console.log(Tone.Transport.timeSignature);
      beatCount = count;
      beatValue = value;
      score.timeSig.count = beatCount;
      score.timeSig.value = beatValue;
      resetCanvas();
      validateMeasures();
      if (selectedNote) {
        highlightNote();
      }
      toggleOptions('.time-options-wrapper');
    }

    // provides validation for a measure's beat value
    function validateMeasures() {
      if (score.timeSig.count === '6' && score.timeSig.value === '8') {
        score.measures.forEach((measure) => {
          if (measure.beats > beatCount / 2 || measure.beats < beatCount / 2) {
            measure.fillColor = 'red';
            resetCanvas();
          } else {
            measure.fillColor = '#999999';
            resetCanvas();
          }
        });
      } else {
        score.measures.forEach((measure) => {
          if (measure.beats > beatCount || measure.beats < beatCount) {
            measure.fillColor = 'red';
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
