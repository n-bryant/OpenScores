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
      noteVals = [];

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

    // declaration of base score values
    let barCount = 1;
    let beatCount = 4;
    let beatValue = 4;
    let defaultMeasure = {
      notes: []
    }
    let notes = [];
    let selectedNote = null;
    let selectedBarId, selectedBeatId;
    let staveX = 10;
    let staveY = 40;
    let staveWidth = 300;
    let staveBars = [];
    let voices = [];

    for (let i = 0; i < beatCount; i++) {
      defaultMeasure.notes[i] = new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q"});
    }
    notes.push(defaultMeasure.notes);
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

        // Connect stave to the rendering context and draw
        staveBars[i].setContext(context).draw();

        // Assign notes to a voice
        let voice = new VF.Voice({num_beats: beatCount, beat_value: beatValue});
        voices.push(voice);
        voices[i] = new VF.Voice({num_beats: beatCount, beat_value: beatValue});
        voices[i].addTickables(notes[i]);

        // Render voice
        VF.Formatter.FormatAndDraw(context, staveBars[i], notes[i]);
        resetNoteElementIds();
      }
      bindEvents();
    }

    // bind events
    function bindEvents() {
      let allNotes = document.querySelectorAll('.vf-stavenote');
      allNotes.forEach((note) => {
        // select a note by id on click
        note.addEventListener('click', function() {
          getNoteById(this);
        });
      });

      document.querySelector('.add-measure-btn').addEventListener('click', () => {
        addMeasure();
      });

      // keypresses
      document.onkeydown = checkKey;
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
        } else if (e.keyCode === 27) {
          // escape key
          e.preventDefault();
          unselectNote();
        }
      }
    }

    // inserts a measure at the end of the score
    // maybe just draw 1 new stave here with defaultMeasure notes instead of drawing whole canvas?
    function addMeasure() {
      // barCount++;
      // beatCount += 4;
      console.log(beatCount);

      // start a new line every 5 measures
      // if (barCount % 5 === 0) {
      //   staveY += 80;
      // }
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

      notes[selectedBarId][notes[selectedBarId].indexOf(selectedNote)] = newPitch;
      selectedNote = newPitch;
      resetCanvas();
      // console.log(notes[0]);
      highlightNote(selectedBarId);
    }

    // change selected note with left and right arrow keys
    function changeSelection(key) {
      if (key === 'right') {
        let nextId;
        if (document.getElementById(`note_${selectedBarId}-${selectedBeatId + 1}`)) {
          nextId = document.getElementById(`note_${selectedBarId}-${selectedBeatId + 1}`);
        } else {
          nextId = document.querySelector('.vf-stavenote:first-of-type');
        }
        getNoteById(nextId);
      } else {
        let prevId;
        if (document.getElementById(`note_${selectedBarId}-${selectedBeatId - 1}`)) {
          prevId = document.getElementById(`note_${selectedBarId}-${selectedBeatId - 1}`);
        } else {
          prevId = document.querySelector('.vf-stavenote:last-of-type');
        }
        getNoteById(prevId);
      }
    }

    // sets selected note
    function getNoteById(note) {
      let barStart = (note.id.indexOf('_') + 1);
      let barEnd = (note.id.indexOf('-') - barStart);
      let beatStart = (note.id.indexOf('-') + 1);

      let barId = note.id.substr(barStart, barEnd);
      selectedBarId = parseInt(barId, 10);
      let beatId = note.id.substr(beatStart);
      selectedBeatId = parseInt(beatId, 10)

      let voiceNotes = voices[barId].tickables;
      for (let i = 0; i < voiceNotes.length; i++) {
        if (voiceNotes[i].attrs.el.id === note.id) {
          selectedNote = voiceNotes[i];
        }
      }

      // add visual representation of selection
      highlightNote(barId);
    }

    // mark a note as highlighted
    function highlightNote(bar) {
      const blueAccent = "#41A2EB";
      // remove highlight from notes that aren't selected
      notes[bar].forEach((note) => {
        if (selectedNote.attrs.el.id !== note.attrs.el.id) {
          note.setStyle({fillStyle: 'black', strokeStyle: 'black'});
        }
      });

      let highlightedNote = notes[bar][notes[bar].indexOf(selectedNote)];
      highlightedNote.setStyle({fillStyle: blueAccent, strokeStyle: blueAccent});
      resetCanvas();
    }

    // reset library with new note and voice instances
    function resetCanvas() {
      setLibrary();
      drawScore();
    }

    // Creates consistency in VF generated note element ids for selection later
    function resetNoteElementIds() {
      let allNotes = document.querySelectorAll('.vf-stavenote');

      // id set to format of note-BAR-BEAT
      allNotes.forEach((noteEl) => {
        for (let i = 0; i < notes.length; i++) {
          for (let j = 0; j < notes[i].length; j++) {
            if (notes[i][j].attrs.el.id === noteEl.id) {
              noteEl.id = `note_${i}-${j}`;
            }
          }
        }
      });
    }

    // unselect a note
    function unselectNote() {
      selectedNote = null;
      notes.forEach((noteArr) => {
        noteArr.forEach((note) => {
          note.setStyle({fillStyle: 'black', strokeStyle: 'black'});
        });
      });
      resetCanvas();
    }
  }

  render() {

    return (
      <div id="vfDisplay"></div>
    );
  }
}

export default VFDisplay;
