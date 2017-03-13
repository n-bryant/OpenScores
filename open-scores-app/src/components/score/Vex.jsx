import React, {Component} from 'react';
import Vex from 'vexflow/releases/vexflow-min';

class Vexx extends Component {
  componentDidMount() {
    const VF = Vex.Flow;
    console.log(VF);

    // Create an SVG renderer and attach it to the DIV element named "boo".
    const div = document.getElementById('vfDisplay');
    let renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(500, 500);
    let context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a stave of width 400 at position 10, 40 on the canvas.
    let stave = new VF.Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef("treble").addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
  }

  render() {

    return (
      <div id="vfDisplay"></div>
    );
  }
}

export default Vexx;
