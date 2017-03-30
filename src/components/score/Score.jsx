import React, {Component} from 'react';
import SkinnyHeader from './SkinnyHeader';
import VFDisplay from './VexSansSocket'; // './Vex'
import ToolBox from './ToolBox';
import KeySigs from './KeySigs';
import ChordOptions from './chords/ChordOptions';
import Collaborators from './Collaborators';
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
      scores: {},
      users: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState('/users',
      {
        context: this,
        state: 'users'
      }
    );
  }

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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
      let currentScore;

      if (this.props.params.scoreId) {
        currentScore = this.props.scores[`score-${this.props.params.scoreId}`];
      }

      this.setState({
        uid: data.id,
        avatar: data.avatar,
        name: data.name,
        score: currentScore || null
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

    const score = {
      ...this.state.score
    };
    score.bpm = newBPM;
    this.setState({score});
  }

  processScore(data) {
    // gather score data from Vex
    if (this.props.title !== "") {
      data.title = this.props.title;
    } else {
      data.title = this.state.score.title;
    }
    data.bpm = this.props.bpm;

    for (let i = 0; i < data.measures.length; i++) {
      data.measures[i].stave = {};
      for (let j = 0; j < data.measures[i].notes.length; j++) {
        data.measures[i].notes[j] = {
          keys: data.measures[i].notes[j].keys,
          duration: data.measures[i].notes[j].duration,
          noteType: data.measures[i].notes[j].noteType
        };
      }
    }
    // console.log(data);

    this.props.addScore(data);
    window.location.href = `/score/${data.id}`;
  }

  processTitleForm(event) {
    event.preventDefault();
    const newTitle = this.title.value;

    this.props.editTitle(newTitle);
    this.titleForm.reset();
    this.titleForm.classList.add('is-hidden');
    this.titleEl.classList.remove('is-hidden');

    const score = {
      ...this.state.score
    };
    score.title = newTitle;
    this.setState({score});
  }

  toggleCollaborators() {
    document.querySelector('.collaborators-wrapper').classList.remove('is-hidden');
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
          <SkinnyHeader avatar={this.state.avatar}/>
          <div className="score-container">
            <div className="save-btn" onClick={() => {this.processScore(this.vexData.state.score)}}>
              <img className="save-icon" src="https://cdn0.iconfinder.com/data/icons/rcons-basic/16/floppy_disk-512.png" alt="save button" />
            </div>
            <div className="print-btn">
              <img className="print-icon" src="https://image.flaticon.com/icons/svg/149/149854.svg" alt="print button" />
            </div>
            <div className="title-container">
              <img className="edit-title-icon is-hidden" src="edit-icon" alt="edit-icon"/>
              <h2 ref={(scoreTitle) => this.titleEl = scoreTitle} className="score-title is-centered" onClick={() => {this.toggleForm(this.titleEl, this.titleForm)}}>{this.props.title || this.state.score.title}</h2>
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
              <p ref={(scoreBPM) => this.bpmEl = scoreBPM} className="score-bpm" onClick={() => {this.toggleForm(this.bpmEl, this.bpmForm)}}>{this.state.score.bpm || this.props.bpm}bpm</p>
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
            <div className="invite-btn vertical" onClick={this.toggleCollaborators}>Invite Collaborators!</div>
            <Collaborators currUser={`user-${this.state.uid}`} users={this.state.users} title={this.props.title} scoreId={`score-${this.props.params.scoreId}`}/>
            <ReactApp/>
            <VFDisplay ref={(vexData) => {this.vexData = vexData;}} score={this.props.scores[`score-${this.props.params.scoreId}`]} user={this.state.uid} bpm={this.state.score.bpm} title={this.props.title}/>
          </div>
        </section>
      </section>
    );
  }
}

export default Score;
