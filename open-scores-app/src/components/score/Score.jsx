import React, {Component} from 'react';
import SkinnyHeader from './SkinnyHeader';
import VFDisplay from './Vex';
import ToolBox from './ToolBox';
import KeySigs from './KeySigs';
import ChordOptions from './chords/ChordOptions';

class Score extends Component {

  processBPMForm(event) {
    event.preventDefault();
    const newBPM = this.bpm.value;

    this.props.editBPM(newBPM);
    this.bpmForm.reset();
    this.bpmForm.classList.add('is-hidden');
    this.bpmEl.classList.remove('is-hidden');
    console.log(newBPM);
    // updateBpm(newBPM);
  }

  processTitleForm(event) {
    event.preventDefault();
    const newTitle = this.title.value;

    this.props.editTitle(newTitle);
    this.titleForm.reset();
    this.titleForm.classList.add('is-hidden');
    this.titleEl.classList.remove('is-hidden');
  }

  toggleForm(element, form) {
    element.classList.add('is-hidden');
    form.classList.remove('is-hidden');
  }

  render() {
    return (
      <section className="score-page-container is-flex">
        <ToolBox/>
        <section className="score-wrapper vertical">
          <SkinnyHeader/>
          <div className="score-container">
            <button className="print-btn">print</button>
            <div className="title-container">
              <img className="edit-title-icon is-hidden" src="edit-icon" alt="edit-icon"/>
              <h2 ref={(scoreTitle) => this.titleEl = scoreTitle} className="score-title is-centered" onClick={() => {this.toggleForm(this.titleEl, this.titleForm)}}>{this.props.title}</h2>
              <form ref={(fullTitleForm) => this.titleForm = fullTitleForm} className="edit-title-form is-hidden" name="edit-title-form" onSubmit={this.processTitleForm.bind(this)}>
                <legend className="is-hidden">Edit Title</legend>
                <label htmlFor="title" className="is-hidden"/>
                <input className="title-input is-centered" ref={(inputTitle) => this.title = inputTitle} type="text" id="title" placeholder={this.props.title} required autoFocus/>
                <label className="is-hidden" type="submit" value="Update Title">
                  <input type="submit" value="update title"/>
                </label>
              </form>
            </div>
            <div className="bpm-container">
              <p ref={(scoreBPM) => this.bpmEl = scoreBPM} className="score-bpm" onClick={() => {this.toggleForm(this.bpmEl, this.bpmForm)}}>{this.props.bpm}bpm</p>
              <form ref={(fullBPMForm) => this.bpmForm = fullBPMForm} className="edit-bpm-form is-flex is-hidden" name="edit-bpm-form" onSubmit={this.processBPMForm.bind(this)}>
                <legend>bpm</legend>
                <label htmlFor="bpm" className="is-hidden"/>
                <input className="bpm-input" ref={(inputBPM) => this.bpm = inputBPM} type="number" id="bpm" min="0" max="220" required/>
                <label className="is-hidden" type="submit" value="Update BPM">
                  <input type="submit" value="update bpm"/>
                </label>
              </form>
            </div>
            <KeySigs />
            <ChordOptions />
            <VFDisplay />
          </div>
        </section>
      </section>
    );
  }
}

export default Score;
