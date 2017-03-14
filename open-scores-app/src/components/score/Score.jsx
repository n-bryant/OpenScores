import React, {Component} from 'react';
import VFDisplay from './Vex';
import ToolBox from './ToolBox';

class Score extends Component {
  processForm(event) {
    event.preventDefault();
    const newTitle = this.title.value;

    this.props.editTitle(newTitle);
    this.form.reset();
    this.form.classList.add('is-hidden');
    this.titleEl.classList.remove('is-hidden');
  }

  toggleTitleForm() {
    this.titleEl.classList.add('is-hidden');
    this.form.classList.remove('is-hidden');
  }

  render() {
    return (
      <section className="score-page-container is-flex">
        <ToolBox/>
        <section className="score-wrapper">
          <div className="score-container">
            <div className="title-container">
              <img className="edit-title-icon is-hidden" src="edit-icon" alt="edit-icon"/>
              <h2 ref={(scoreTitle) => this.titleEl = scoreTitle} className="score-title is-centered" onClick={this.toggleTitleForm.bind(this)}>{this.props.title}</h2>
              <form ref={(fullForm) => this.form = fullForm} className="edit-title-form is-hidden" name="edit-title-form" onSubmit={this.processForm.bind(this)}>
                <legend className="is-hidden">Edit Title</legend>
                <label htmlFor="title" className="is-hidden"/>
                <input className="title-input is-centered" ref={(inputTitle) => this.title = inputTitle} type="text" id="title" placeholder={this.props.title} required autoFocus/>
                <label className="is-hidden" type="submit" value="Update Title">
                  <input type="submit" value="Make Reservation"/>
                </label>
              </form>
            </div>
            <VFDisplay />
          </div>
        </section>
      </section>
    );
  }
}

export default Score;
