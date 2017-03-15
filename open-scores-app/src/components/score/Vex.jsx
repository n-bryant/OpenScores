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
    let c4 = new VF.StaveNote({keys: ['C/4'], duration: duration});
    let cs4 = new VF.StaveNote({keys: ['C#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
    let d4 = new VF.StaveNote({keys: ['D/4'], duration: duration});
    let ds4 = new VF.StaveNote({keys: ['D#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
    let e4 = new VF.StaveNote({keys: ['E/4'], duration: duration});
    let f4 = new VF.StaveNote({keys: ['F/4'], duration: duration});
    let fs4 = new VF.StaveNote({keys: ['F#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
    let g4 = new VF.StaveNote({keys: ['G/4'], duration: duration});
    let gs4 = new VF.StaveNote({keys: ['G#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
    let a4 = new VF.StaveNote({keys: ['A/4'], duration: duration});
    let as4 = new VF.StaveNote({keys: ['A#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
    let b4 = new VF.StaveNote({keys: ['B/4'], duration: duration});
    let c5 = new VF.StaveNote({keys: ['C/5'], duration: duration});

    // declaration of base score values
    let barCount = 1;
    let noteVals = [
      c4,
      cs4,
      d4,
      ds4,
      e4,
      f4,
      fs4,
      g4,
      gs4,
      a4,
      as4,
      b4,
      c5
    ];

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
