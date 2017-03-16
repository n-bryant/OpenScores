import React, {Component} from 'react';
import Vex from 'vexflow/releases/vexflow-min';
// import jQuery from '../../vendor/jquery-3.1.1.min.js';

class VFDisplay extends Component {

  // wait for page load to bring in VexFlow
  componentDidMount() {
    const VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "vfDisplay".
    const vfDisplay = document.getElementById('vfDisplay');
    let renderer = new VF.Renderer(vfDisplay, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(1220, 500);
    let context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    let duration = '4';
    // you can set default note/chord values
    let C7 = new VF.StaveNote({
      keys: [
        'C/4', 'E/4', 'G/4', 'Bb/4'
      ],
      duration: duration
    });

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

    // declaration of base score values
    //once we implement keys make array for all notes in key
    let barCount = 1;
    let cMajScale = [c3, d3, e3, f3, g3, a3, b3, c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5, a5, b5, c6, d6, e6, f6, g6, a6, b6, c7];
    let gMajScale = [c3, d3, e3, fs3, g3, a3, b3, c4, d4, e4, fs4, g4, a4, b4, c5, d5, e5, fs5, g5, a5, b5, c6, d6, e6, fs6, g6, a6, b6, c7];
    let dMajScale = [cs3, d3, e3, fs3, g3, a3, b3, cs4, d4, e4, fs4, g4, a4, b4, cs5, d5, e5, fs5, g5, a5, b5, cs6, d6, e6, fs6, g6, a6, b6];
    let aMajScale = [cs3, d3, e3, fs3, gs3, a3, b3, cs4, d4, e4, fs4, gs4, a4, b4, cs5, d5, e5, fs5, gs5, a5, b5, cs6, d6, e6, fs6, gs6, a6, b6];
    let eMajScale = [cs3, ds3, e3, fs3, gs3, a3, b3, cs4, ds4, e4, fs4, gs4, a4, b4, cs5, ds5, e5, fs5, gs5, a5, b5, cs6, ds6, e6, fs6, gs6, a6, b6];
    let bMajScale = [cs3, ds3, e3, fs3, gs3, as3, b3, cs4, ds4, e4, fs4, gs4, as4, b4, cs5, ds5, e5, fs5, gs5, as5, b5, cs6, ds6, e6, fs6, gs6, as6, b6];
    let fsMajScale = [cs3, ds3, es3, fs3, gs3, as3, b3, cs4, ds4, es4, fs4, gs4, as4, b4, cs5, ds5, es5, fs5, gs5, as5, b5, cs6, ds6, es6, fs6, gs6, as6, b6];

    let fMajScale = [c3, d3, e3, f3, g3, a3, b3, c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5, a5, b5, c6, d6, e6, f6, g6, a6, b6, c7];
    let bfMajScale = [bf3, c3, ]
    // setLibrary();

    // creates VexFlow scale library
    let scales = [{name: 'cMajScale', noteVals: []}, {name: 'gMajScale', noteVals: []}, {name: 'dMajScale', noteVals: []}, {name: 'aMajScale', noteVals: []}, {name: 'eMajScale', noteVals: []}, {name: 'bMajScale', noteVals: []}, {name: 'fsMajScale', noteVals: []},
  {name: 'gfMajScale', noteVals: []}, {name: 'dfMajScale', noteVals: []}, {name: 'afMajScale', noteVals: []}, {name: 'efMajScale', noteVals: []}, {name: 'bfMajScale', noteVals: []}, {name: 'fMajScale', noteVals: []}];

    function setLibrary() {
      // let c3 = new VF.StaveNote({keys: ['C/3'], duration: duration});
      // let d3 = new VF.StaveNote({keys: ['D/3'], duration: duration});
      // let e3 = new VF.StaveNote({keys: ['E/3'], duration: duration});

      let noteVals = [c3, cs3, df3, d3, ds3, ef3, e3, es3, ff3, f3, fs3, gf3, g3, gs3, af3, a3, as3, bf3, b3, bs3, cf4, c4, cs4, df4, d4, ds4, ef4, e4, es4, ff4, f4, fs4, gf4, g4, gs4, af4, a4, as4, bf4, b4, bs4, cf5, c5, cs5, df5, d5, ds5, ef5, e5, es5, ff5, f5, fs5, gf5, g5, gs5, af5, a5, as5, bf5, b5, bs5, cf6, c6, cs6, df6, d6, ds6, ef6, e6, es6, ff6, f6, fs6, gf6, g6, gs6, af6, a6, as6, bf6, b6, bs6, cf7];


      for (let i = 0; i < scales.length; i++) {
        if (scales[i].name === 'a') {
        let  notInScale = [d3]; // notes that we don't want this scale to have
          // push only the notes that are included in the scale
          noteVals.forEach((note) => {
            if (notInScale.indexOf(note) === -1) {
              scales[i].noteVals.push(note);
            }
          });
        } // else if (scales[i].name === 'b') {} ...
      }
    }


    let octaves = [3, 4, 5];
    let notes = [];
    let selectedNote;
    let staveX = 10;
    let staveY = 40;
    let staveWidth = 300;
    let staveBars = [];
    let voice = new VF.Voice({num_beats: 4, beat_value: 4});

    // create 1 note, push it to notes array, and draw that 1 note to page.
    notes[0] = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"});
    notes[1] = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"});
    notes[2] = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"});
    notes[3] = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"});
    drawScore();

    // draw a bar for each measure to the canvas
    function drawScore() {
      // clear anything on the canvas
      context.clear();

      for (let i = 0; i < barCount; i++) {
        if (i === 0) {
          // Create a stave of width 300 at position 10, 40 on the canvas.
          staveBars[i] = new VF.Stave(staveX, staveY, staveWidth);

          // Add a clef and time signature to first bar.
          staveBars[i].addClef("treble").addTimeSignature("4/4");
        } else {
          staveBars[i] = new VF.Stave(staveBars[i - 1].width + staveBars[i - 1].x, staveY, staveWidth);
        }

        // notes[i] = [];
        // Connect it to the rendering context and draw
        staveBars[i].setContext(context).draw();

        // assign notes to a voice
        voice.addTickables(notes);

        // Render voice
        VF.Formatter.FormatAndDraw(context, staveBars[i], notes);
        bindEvents();
      }

      function bindEvents() {
        // select a note by id on click
        let allNotes = document.querySelectorAll('.vf-stavenote');
        allNotes.forEach((note) => {
          note.addEventListener('click', function() {
            getNoteById(this);
          });
        });
      }

      function getNoteById(note) {
        let selected = note;
        let voiceNotes = voice.tickables;
        console.log(voiceNotes);
        for (let i = 0; i < voiceNotes.length; i++) {
          if (voiceNotes[i].attrs.el.id === selected.id) {
            selectedNote = voiceNotes[i];
          }
        }
        // add visual representation of selection
        highlightNote();
        // updateNote();
      }

      function highlightNote() {
        let highlightedNote = new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q"});
        highlightedNote.setStyle({fillStyle: "blue", strokeStyle: "blue"});
        notes[notes.indexOf(selectedNote)] = highlightedNote;
        voice = new VF.Voice({num_beats: 4, beat_value: 4});
        drawScore();
      }

      function updateNote() {
        // set new note value for note on click and redraw canvas
        let updatedNote = new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q"});
        notes[notes.indexOf(selectedNote)] = updatedNote;
        voice = new VF.Voice({num_beats: 4, beat_value: 4});
        drawScore();
      }
    }

    // // Create notes
    // for (let i = 0; i < barCount; i++) {
    //   // initial declaration of chords
    //   for (let measure = 0; measure < barCount; measure++) {
    //     notes[i].push(new VF.StaveNote({clef:"treble", keys: ["c/3"], duration: "q"}));
    //     // notes[i][measure].stem.hide = true;
    //
    //     // how many notes to add
    //     let octave = 3;
    //     let count = 0;
    //     while (octave <= 5) {
    //       for (let k = 0; k < noteVals.length; k++) {
    //         notes[i][measure].keys[count] = `${noteVals[k]}/${octave}`;
    //         count++;
    //       }
    //       octave++;
    //     }
    //   }
    //   // console.log(notes[i]);
    //   // console.log(staveBars[i]);
    //
    //   VF.Formatter.FormatAndDraw(context, staveBars[i], notes[i]);
    // }
  }

  render() {

    return (
      <div id="vfDisplay"></div>
    );
  }
}

export default VFDisplay;
