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

    let noteVals = [];
    function setLibrary() {
      let c4 = new VF.StaveNote({keys: ['C/4'], duration: duration});
      noteVals.push(c4);
      let cs4 = new VF.StaveNote({keys: ['C#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      noteVals.push(cs4);
      let d4 = new VF.StaveNote({keys: ['D/4'], duration: duration});
      noteVals.push(d4);
      let ds4 = new VF.StaveNote({keys: ['D#/4'], duration: duration}).addAccidental(0, new VF.Accidental('#'));
      noteVals.push(ds4);
      let e4 = new VF.StaveNote({keys: ['E/4'], duration: duration});
      noteVals.push(e4);
    }
    setLibrary();

    // // creates VexFlow scale library
    // let scales = [{name: 'a', noteVals: []}, {name: 'b', noteVals: []}, {name: 'c', noteVals: []}];
    // function setLibrary() {
    //   let c3 = new VF.StaveNote({keys: ['C/3'], duration: duration});
    //   let d3 = new VF.StaveNote({keys: ['D/3'], duration: duration});
    //   let e3 = new VF.StaveNote({keys: ['E/3'], duration: duration});
    //
    //   let noteVals = [c3, d3, e3];
    //   for (let i = 0; i < scales.length; i++) {
    //     if (scales[i].name === 'a') {
    //       notInScale = [d3]; // notes that we don't want this scale to have
    //       // push only the notes that are included in the scale
    //       noteVals.forEach((note) => {
    //         if (notInScale.indexOf(note) === -1) {
    //           scales[i].noteVals.push(note);
    //         }
    //       });
    //     } // else if (scales[i].name === 'b') {} ...
    //   }
    // }

    // you can set default note/chord values
    let C7 = new VF.StaveNote({
      keys: [
        'C/4', 'E/4', 'G/4', 'Bb/4'
      ],
      duration: duration
    });

    // declaration of base score values
    let barCount = 1;

    let octaves = [3, 4, 5];
    let notes = [];
    let selectedNote = null;
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

        // Assign notes to a voice
        voice.addTickables(notes);

        // Render voice
        VF.Formatter.FormatAndDraw(context, staveBars[i], notes);

        // Creating consistency in VF generated note element ids for selection later
        let allNotes = document.querySelectorAll('.vf-stavenote');
        for (let i = 0; i < allNotes.length; i++) {
          allNotes[i].id = `note${i}`;
        }
        bindEvents();
      }
    }

    function bindEvents() {
      // select a note by id on click
      let allNotes = document.querySelectorAll('.vf-stavenote');
      allNotes.forEach((note) => {
        note.addEventListener('click', function() {
          getNoteById(this);
        });
      });

      // keypresses
      document.onkeydown = checkKey;
    }

    // check which key was pressed
    function checkKey(e) {
      e = e || window.event;
      e.preventDefault();

      if (e.keyCode == '38') {
        // up arrow
        selectedNote ? changePitch('up') : selectedNote = null;
      } else if (e.keyCode == '40') {
        // down arrow
        selectedNote ? changePitch('down') : selectedNote = null;
      } else if (e.keyCode == '37') {
        // left arrow
        changeSelection('left');
      } else if (e.keyCode == '39') {
        // right arrow
        changeSelection('right');
      }
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

      notes[notes.indexOf(selectedNote)] = newPitch;
      selectedNote = newPitch;
      voice = new VF.Voice({num_beats: 4, beat_value: 4});
      setLibrary();
      drawScore();
      highlightNote();
    }

    // change selected note with left and right arrow keys
    function changeSelection(key) {
      let currentId = selectedNote.attrs.el.id;
      currentId = parseInt(currentId.substr(4, 10));
      if (key === 'right') {
        let nextId;
        if (document.getElementById(`note${currentId + 1}`)) {
          nextId = document.getElementById(`note${currentId + 1}`);
        } else {
          nextId = document.querySelector('.vf-stavenote:first-of-type');
        }
        getNoteById(nextId);
      } else {
        let prevId;
        if (document.getElementById(`note${currentId - 1}`)) {
          prevId = document.getElementById(`note${currentId - 1}`);
        } else {
          prevId = document.querySelector('.vf-stavenote:last-of-type');
        }
        getNoteById(prevId);
      }
    }

    // sets selected note
    function getNoteById(note) {
      let selected = note;
      let voiceNotes = voice.tickables;
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
      const blueAccent = "#41A2EB";
      // remove highlight from notes that aren't selected
      notes.forEach((note) => {
        if (selectedNote.attrs.el.id !== note.attrs.el.id) {
          note.setStyle({fillStyle: 'black', strokeStyle: 'black'});
        }
      });

      let highlightedNote = notes[notes.indexOf(selectedNote)];
      highlightedNote.setStyle({fillStyle: blueAccent, strokeStyle: blueAccent});
      voice = new VF.Voice({num_beats: 4, beat_value: 4});
      setLibrary();
      drawScore();
    }

    function updateNote() {
      // set new note value for note on click and redraw canvas
      let updatedNote = new VF.StaveNote({clef: "treble", keys: ["f/4"], duration: "q"});
      notes[notes.indexOf(selectedNote)] = updatedNote;
      voice = new VF.Voice({num_beats: 4, beat_value: 4});
      setLibrary();
      drawScore();
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
