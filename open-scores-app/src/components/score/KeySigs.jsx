import React, {Component} from 'react';

class KeySigs extends Component {

  render() {
    return (
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
    );
  }
}

export default KeySigs;
