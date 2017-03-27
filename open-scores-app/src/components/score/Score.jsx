import React, {Component} from 'react';
import SkinnyHeader from './SkinnyHeader';
import VFDisplay from './Vex';
import ToolBox from './ToolBox';
import KeySigs from './KeySigs';
import ChordOptions from './chords/ChordOptions';
import ReactApp from '../react-chat/ReactApp';
import io from 'socket.io-client';
import $ from 'jquery';
import base from '../../base';

let socket = io(`http://localhost:3001`);


class Score extends Component {
  constructor() {
    super();

    this.state = {
      score: {},
      scores: {}
    }
  }

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  authHandler(err, authData) {
    if (err) {
      console.log(err);
      return;
    }

    // grab the profile info
    const profileRef = base.database().ref(`users/user-${authData.user.uid}`);

    // query the firebase once for the profile data
    profileRef.once('value', (snapshot) => {
      const data = snapshot.val();

      this.setState({
        uid: data.id,
        avatar: data.avatar,
        name: data.name,
        scores: data.scores
      });

      this.props.setUser(this.state.uid);
    });
  }

  processBPMForm(event) {
    event.preventDefault();
    const newBPM = this.bpm.value;

    this.props.editBPM(newBPM);
    this.bpmForm.reset();
    this.bpmForm.classList.add('is-hidden');
    this.bpmEl.classList.remove('is-hidden');
    // console.log(newBPM);
    // updateBpm(newBPM);
  }

  processScore(data) {
    // gather score data from Vex
    data.title = this.props.title;
    data.bpm = this.props.bpm;
    console.log(data);

    for (let i = 0; i < data.measures.length; i++) {
      data.measures[i].stave = {};
      for (let j = 0; j < data.measures[i].notes.length; j++) {
        data.measures[i].notes[j] = {
          keys: data.measures[i].notes[j].keys,
          duration: data.measures[i].notes[j].duration
        };
      }
    }

    this.props.addScore(data);
    // window.location.href = `/score/${data.id}`;
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
            <div className="save-btn" onClick={() => {this.processScore(this.vexData.state.score)}}>
              <img className="save-icon" src="https://cdn0.iconfinder.com/data/icons/rcons-basic/16/floppy_disk-512.png" alt="save button" />
            </div>
            <div className="print-btn">
              <img className="print-icon" src="https://image.flaticon.com/icons/svg/149/149854.svg" alt="print button" />
            </div>
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
            <ReactApp/>
            <VFDisplay ref={(vexData) => {this.vexData = vexData;}} score={this.props.scores[`score-${this.props.params.scoreId}`]} user={this.props.user} bpm={this.props.bpm} title={this.props.title}/>
          </div>
        </section>
      </section>
    );
  }
}

export default Score;
