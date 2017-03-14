import React, {Component} from 'react';

class ToolBox extends Component {
  render() {
    return (
      <div>
        <div className="tool-box is-flex">

          <div className="playback-controls is-centered">
            <div className="playback-buttons">
              <button className="playback is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122324.svg" alt="playback"/>
              </button>
              <button className="playback is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122326.svg" alt="playback"/>
              </button>
              <button className="playback is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122323.svg" alt="playback"/>
              </button>
              <button className="toggle-pos">
                <img src="https://image.flaticon.com/icons/svg/122/122303.svg" alt="playback"/>
              </button>
            </div>
            <div className="playback-buttons">
              <button className="playback is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122329.svg" alt="playback"/>
              </button>
              <button className="playback is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122327.svg" alt="playback"/>
              </button>
              <button className="playback is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122328.svg" alt="playback"/>
              </button>
              <button className="playback is-centered">
                <img src="https://image.flaticon.com/icons/svg/122/122330.svg" alt="playback"/>
              </button>
            </div>
          </div>
          <section className="notation-selectors is-flex">
            <div className="note-lengths-container is-centered">
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122350.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122351.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122352.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122321.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122353.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122354.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/122/122355.svg" alt="note"/></button>
            </div>
            <div className="rest-lengths-container is-centered">
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125052.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125054.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125055.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://cdn3.iconfinder.com/data/icons/music-notes-symbols/512/Icon_19-128.png" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125056.svg" alt="note"/></button>
              <button className="icon is-centered"><img src="https://image.flaticon.com/icons/svg/125/125057.svg" alt="note"/></button>
            </div>
            <div className="dynamics-container is-centered">
              <button className="icon-dyn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125066.svg" alt="note"/></button>
              <button className="icon-dyn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125058.svg" alt="note"/></button>
              <button className="icon-dyn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125059.svg" alt="note"/></button>
              <button className="icon-dyn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125060.svg" alt="note"/></button>
              <button className="icon-dyn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125062.svg" alt="note"/></button>
              <button className="icon-dyn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125063.svg" alt="note"/></button>
              <button className="icon-dyn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125064.svg" alt="note"/></button>
              <button className="icon-dyn is-centered"><img src="https://image.flaticon.com/icons/svg/125/125067.svg" alt="note"/></button>
            </div>
          </section>
          <div className="chat-container is-flex is-centered">
            <h4>chat</h4>
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
