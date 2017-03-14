import React, {Component} from 'react';
import Vex from 'vexflow/releases/vexflow-min';

class VFDisplay extends Component {
  // for making things selectable, try adding transparent rests at each mark


  componentDidMount() {
    const VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "boo".
    const div = document.getElementById('vfDisplay');
    let renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(1220, 500);
    let context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a bar for each bar; 4 by default;
    let barCount = 4;
    let staveX = 10;
    let staveY = 40;
    let staveWidth = 300;
    let staveBars = [];

    for (let i = 0; i < barCount; i++) {
      if (i === 0) {
        // Create a stave of width 300 at position 10, 40 on the canvas.
        staveBars[i] = new VF.Stave(staveX, staveY, staveWidth);

        // Add a clef and time signature.
        staveBars[i].addClef("treble").addTimeSignature("4/4");
      } else {
        staveBars[i] = new VF.Stave(staveBars[i - 1].width + staveBars[i - 1].x, staveY, staveWidth);
      }
      // Connect it to the rendering context and draw
      staveBars[i].setContext(context).draw();
    }
  }

  render() {

    return (
      <div id="vfDisplay"></div>
    );
  }
}

export default VFDisplay;
