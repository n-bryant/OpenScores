import React, {Component} from 'react';
import $ from 'jquery';
import Vex from 'vexflow/releases/vexflow-min';
import VexTab from 'vextab/releases/vextab-div';
// import {getScale} from './helpers';

class VFDisplay extends Component {

  // wait for page load to bring in VexFlow
  componentDidMount() {
    let VF = Vex.Flow;
    let vextab = require(vextab);
    let VexTab = vextab.VexTab;
    let Artist = vextab.Artist;
    let Renderer = vextab.Vex.Flow.Renderer;

    let renderer = new Vex.Flow.Renderer($('#vfDisplay'), Vex.Flow.Renderer.Backends.SVG);
    let artist = new Artist(10, 10, 600, {scale: 0.8});
    vextab = new VexTab(artist);

    try {
    // Parse VexTab music notation passed in as a string.
    vextab.parse("tabstave notation=true\n notes :q 4/4\n")

    // Render notation onto canvas.
    artist.render(renderer);
} catch (e) {
    console.log(e);
}

  }

  render() {

    return (
      <div id="vfDisplay"></div>
    );
  }
}

export default VFDisplay;
