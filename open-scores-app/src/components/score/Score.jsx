import React, {Component} from 'react';
import VFDisplay from './Vex';
import ToolBox from './ToolBox';
// import ABCDisplay from './ABC';

class Score extends Component {

  processBPMForm(event) {
    event.preventDefault();
    const newBPM = this.bpm.value;

    this.props.editBPM(newBPM);
    this.bpmForm.reset();
    this.bpmForm.classList.add('is-hidden');
    this.bpmEl.classList.remove('is-hidden');
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
        <section className="score-wrapper">
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
            <div className="key-options-container is-hidden">
              <div className="exit-keys-btn">X</div>
              <div className="keys-wrapper is-centered is-flex">
                <div className="key-option" data-key="C">
                  <p className="key-name">CMaj/Amin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/C-major_a-minor.svg/600px-C-major_a-minor.svg.png" alt="CMaj/Amin" />
                  </div>
                </div>
                <div className="key-option" data-key="G">
                  <p className="key-name">GMaj/Emin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/G-major_e-minor.svg/600px-G-major_e-minor.svg.png" alt="GMaj/Emin" />
                  </div>
                </div>
                <div className="key-option" data-key="D">
                  <p className="key-name">DMaj/Bmin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/D-major_h-minor.svg/600px-D-major_h-minor.svg.png" alt="DMaj/Bmin" />
                  </div>
                </div>
                <div className="key-option" data-key="A">
                  <p className="key-name">AMaj/F#min</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/A-major_f-sharp-minor.svg/600px-A-major_f-sharp-minor.svg.png" alt="AMaj/F#min" />
                  </div>
                </div>
                <div className="key-option" data-key="E">
                  <p className="key-name">EMaj/C#min</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/E-major_c-sharp-minor.svg/600px-E-major_c-sharp-minor.svg.png" alt="EMaj/C#min" />
                  </div>
                </div>
                <div className="key-option" data-key="B">
                  <p className="key-name">BMaj/G#min</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/B-major_g-sharp-minor.svg/600px-B-major_g-sharp-minor.svg.png" alt="BMaj/G#min" />
                  </div>
                </div>
                <div className="key-option" data-key="F#">
                  <p className="key-name">F#Maj/D#min</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/F-sharp-major_d-sharp-minor.svg/600px-F-sharp-major_d-sharp-minor.svg.png" alt="F#Maj/D#min" />
                  </div>
                </div>
                <div className="key-option" data-key="F">
                  <p className="key-name">FMaj/Dmin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/F-major_d-minor.svg/600px-F-major_d-minor.svg.png" alt="FMaj/Dmin" />
                  </div>
                </div>
                <div className="key-option" data-key="Bb">
                  <p className="key-name">BbMaj/Gbmin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/B-flat-major_g-minor.svg/600px-B-flat-major_g-minor.svg.png" alt="BbMaj/Gbmin" />
                  </div>
                </div>
                <div className="key-option" data-key="Eb">
                  <p className="key-name">EbMaj/Cmin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/E-flat-major_c-minor.svg/600px-E-flat-major_c-minor.svg.png" alt="EbMaj/Cmin" />
                  </div>
                </div>
                <div className="key-option" data-key="Ab">
                  <p className="key-name">AbMaj/Fmin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/A-flat-major_f-minor.svg/600px-A-flat-major_f-minor.svg.png" alt="AbMaj/Fmin" />
                  </div>
                </div>
                <div className="key-option" data-key="Db">
                  <p className="key-name">DbMaj/Bbmin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/D-flat-major_b-flat-minor.svg/600px-D-flat-major_b-flat-minor.svg.png" alt="DbMaj/Bbmin" />
                  </div>
                </div>
                <div className="key-option" data-key="Gb">
                  <p className="key-name">GbMaj/Ebmin</p>
                  <div className="key-display">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/G-flat-major_e-flat-minor.svg/600px-G-flat-major_e-flat-minor.svg.png" alt="GbMaj/Ebmin" />
                  </div>
                </div>
              </div>
            </div>
            <VFDisplay />
          </div>
        </section>
      </section>
    );
  }
}

export default Score;
