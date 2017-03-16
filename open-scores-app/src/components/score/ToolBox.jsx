import React, {Component} from 'react';

class ToolBox extends Component {

  toggleToolBoxPosition(event) {
    // const toggleBtn = document.querySelector('.toggle-pos');
    const toolBox = document.querySelector('.tool-box');

    if (toolBox.classList.contains('horizontal')) {
      toolBox.classList.remove('horizontal');
      toolBox.classList.add('vertical');
    } else if (toolBox.classList.contains('vertical')) {
      toolBox.classList.remove('vertical');
      toolBox.classList.add('horizontal');
    }
  }

  render() {
    return (
      <div>
        <div className="tool-box horizontal is-flex">
          <div className="playback-controls is-flex">
            <div className="playback-buttons">
              <button className="playback stopBtn is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122324.svg" alt="stop button"/>
              </button>
              <button className="playback pauseBtn is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122326.svg" alt="pause button"/>
              </button>
              <button className="playback playBtn is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122323.svg" alt="play button"/>
              </button>
              <button className="toggle-pos" onClick={this.toggleToolBoxPosition.bind(this)}>
                <img src="https://image.flaticon.com/icons/svg/122/122303.svg" alt="toggle toolbox view button"/>
              </button>
            </div>
            <div className="playback-buttons">
              <button className="playback to-beg-btn is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122329.svg" alt="reverse to beginning"/>
              </button>
              <button className="playback rev-btn is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122327.svg" alt="reverse button"/>
              </button>
              <button className="playback ff-btn is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122328.svg" alt="fast-forward button"/>
              </button>
              <button className="playback to-end-btn is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122330.svg" alt="fast-forward to end"/>
              </button>
            </div>
          </div>
          <section className="notation-selectors is-flex">
            <div className="note-lengths-container selectors is-centered">
              <h3>Measure</h3>
              <button className="icon is-centered add-measure-btn"><img src="https://image.flaticon.com/icons/svg/7/7632.svg" alt="add measure"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125036.svg" alt="clef"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125049.svg" alt="repeat"/></button>

            </div>
            <div className="note-lengths-container selectors is-centered">
              <h3>Notes</h3>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122350.svg" alt="whole note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122351.svg" alt="half note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122352.svg" alt="quarter note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122321.svg" alt="eighth note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122353.svg" alt="sixteenth note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122354.svg" alt="thirty-second note"/></button>
            </div>
            <div className="accidentals-container selectors is-centered">
              <h3>Modifiers</h3>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125090.svg" alt="flat"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125085.svg" alt="natural"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125088.svg" alt="sharp"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125125.svg" alt="tie"/></button>
              <button className="icon is-centered">•</button>
              <button className="icon triplet-btn is-centered"><p>┌3┐</p></button>
            </div>
            <div className="rest-lengths-container selectors is-centered">
              <h3>Rests</h3>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125053.svg" alt="whole rest"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125052.svg" alt="half rest"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125054.svg" alt="quarter rest"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125055.svg" alt="eighth rest"/></button>
              <button className="icon is-centered"><img src="https://cdn3.iconfinder.com/data/icons/music-notes-symbols/512/Icon_19-128.png" alt="sixteenth rest"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125056.svg" alt="thirty-second rest"/></button>
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
