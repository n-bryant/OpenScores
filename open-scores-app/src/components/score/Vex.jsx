import React, {Component} from 'react';
import Vex from 'vexflow/releases/vexflow-min';

class VFDisplay extends Component {
  // for making things selectable, try adding transparent rests at each mark


  componentDidMount() {
    const VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "VFDisplay".
    const vfDisplay = document.getElementById('vfDisplay');
    let renderer = new VF.Renderer(vfDisplay, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(1220, 500);
    let context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a bar for each bar; 4 by default;
    let barCount = 4;
    let noteVals = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    let notes = [];
    let staveX = 10;
    let staveY = 40;
    let staveWidth = 300;
    let staveBars = [];

    // create 1 note, push it to notes array, and draw that 1 note to page.
      notes[0] = new VF.StaveNote({clef:"treble", keys: ["c/3"], duration: "q"});
    drawScore();
    // work on selecting that one note by clicking, keypress
    // controls do various things that update that note, change its value in the notes array to a new StaveNote object with different values;
      // redraw with new notes array values

    // iterate over all bars, iterate over note positions, create invisible rest to be able to select
    // when a 'selecotor' is clicked, user able to put a note
    // that note updates the value at the index in the stave/note/array
    function drawScore() {
      context.clear();
      for (let i = 0; i < barCount; i++) {
        if (i === 0) {
          // Create a stave of width 300 at position 10, 40 on the canvas.
          staveBars[i] = new VF.Stave(staveX, staveY, staveWidth);

          // Add a clef and time signature.
          staveBars[i].addClef("treble").addTimeSignature("4/4");
        } else {
          staveBars[i] = new VF.Stave(staveBars[i - 1].width + staveBars[i - 1].x, staveY, staveWidth);
        }

        // notes[i] = [];
        // Connect it to the rendering context and draw
        staveBars[i].setContext(context).draw();

        VF.Formatter.FormatAndDraw(context, staveBars[i], notes);
      }
    }

    // notes[0] = new VF.StaveNote({clef:"treble", keys: ["g/4"], duration: "q"});
    // drawScore();



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
