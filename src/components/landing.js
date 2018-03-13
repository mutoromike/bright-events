import React, {Component} from 'react';
// import ShadowText from 'react-shadow-text';

class Intro extends Component {

  render() {
    return (
        <div>
            <header>
            <div className="header-content">
                <div className="header-content-inner">
                {/* <ShadowText theme={{
                shadowTextShadowColor: '#5a3f3f',
                shadowTextShadowBlur: '2px',
                shadowTextXTranslate: '2px',
                shadowTextYTranslate: '2px',
                shadowTextZIndex: 2,
                shadowTextTransitionDuration: '0.4s',
                shadowTextTransitionTiming: 'ease-in-out',
                }}>
                    <h1 id="homeHeading"> Bright Events </h1>
                    <hr />
                </ShadowText> */}
                    <p>Platform to create and manage different types of events. </p>
                    <br />
                        <a href="">RSVP </a>to events. 
                    <br />			
                    <p>
                        Organizing for events? <a href="" id="register"> Register </a> today. 
                    </p>                    
                </div>
            </div>
        </header>
        </div>
    );
  }
}

export default Intro;