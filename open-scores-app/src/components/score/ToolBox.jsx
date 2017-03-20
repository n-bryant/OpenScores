import React, {Component} from 'react';
import Playback from './Playback';

class ToolBox extends Component {



  render() {
    return (
      <div>
        <div className="tool-box horizontal is-flex">
          <Playback/>
          <section className="notation-selectors is-flex">
            <div className="note-lengths-container selectors is-centered">
              <h3>Measure</h3>
              <button className="icon is-centered add-measure-btn"><img src="https://image.flaticon.com/icons/svg/7/7632.svg" alt="add measure"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125036.svg" alt="clef"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125049.svg" alt="repeat"/></button>

            </div>
            <div className="note-lengths-container selectors is-centered">
              <h3>Notes</h3>
              <button className="icon note-option is-centered" data-val="w"><img src="https://image.flaticon.com/icons/svg/122/122350.svg" alt="whole note"/></button>
              <button className="icon note-option is-centered" data-val="h"><img src="https://image.flaticon.com/icons/svg/122/122351.svg" alt="half note"/></button>
              <button className="icon note-option is-centered" data-val="q"><img src="https://image.flaticon.com/icons/svg/122/122352.svg" alt="quarter note"/></button>
              <button className="icon note-option is-centered" data-val="8"><img src="https://image.flaticon.com/icons/svg/122/122321.svg" alt="eighth note"/></button>
              <button className="icon note-option is-centered" data-val="16"><img src="https://image.flaticon.com/icons/svg/122/122353.svg" alt="sixteenth note"/></button>
            </div>
            <div className="accidentals-container selectors is-centered">
              <h3>Modifiers</h3>
              <button className="icon acc-option is-centered" data-val="b"><img src="https://image.flaticon.com/icons/svg/125/125090.svg" alt="flat"/></button>
              <button className="icon acc-option is-centered" data-val="n"><img src="https://image.flaticon.com/icons/svg/125/125085.svg" alt="natural"/></button>
              <button className="icon acc-option is-centered" data-val="#"><img src="https://image.flaticon.com/icons/svg/125/125088.svg" alt="sharp"/></button>
              <button className="icon tie is-centered"><img src="https://image.flaticon.com/icons/svg/125/125125.svg" alt="tie"/></button>
              <button className="icon dot is-centered">•</button>
              <button className="icon triplet-btn is-centered"><p>┌3┐</p></button>
            </div>
            <div className="rest-lengths-container selectors is-centered">
              <h3>Rests</h3>
              <button className="icon note-option is-centered" data-val="wr"><img src="https://image.flaticon.com/icons/svg/125/125053.svg" alt="whole rest"/></button>
              <button className="icon note-option is-centered" data-val="hr"><img src="https://image.flaticon.com/icons/svg/125/125052.svg" alt="half rest"/></button>
              <button className="icon note-option is-centered" data-val="qr"><img src="https://image.flaticon.com/icons/svg/125/125054.svg" alt="quarter rest"/></button>
              <button className="icon note-option is-centered" data-val="8r"><img src="https://image.flaticon.com/icons/svg/125/125055.svg" alt="eighth rest"/></button>
              <button className="icon note-option is-centered" data-val="16r"><img src="https://cdn3.iconfinder.com/data/icons/music-notes-symbols/512/Icon_19-128.png" alt="sixteenth rest"/></button>
            </div>
            <div className="dynamics-container selectors is-centered">
              <h3>Dynaics</h3>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125066.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125058.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125059.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125060.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125062.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125063.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125064.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125067.svg" alt="note"/></button>
            </div>
          </section>
          <div className="chat-container is-flex is-centered">
            <h4>Chat</h4>
            <form className="chat-form is-flex">
              <textarea className="text-box"></textarea>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBox;
