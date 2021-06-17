import React, { Component } from 'react';
export default class AboutMe extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="s-about target-section">
        <div className="row">
            <div className="column large-3 tab-12">
            <img className="s-about__pic" src="images/avatars/bitmoji.jpg" alt="" />
            </div>
            <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
            A passionate, charismatic and motivated person who always strives for better things. Helping people is a strength of mine and through this my communication skills and teamwork skills have benefitted immensely. Having confidence as a trait means that things like public speaking and meeting new people are not a problem for me.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
                <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                    Ben Clarke <br />
                    Gorey, <br />
                    Wexford, Ireland <br />
                    <a href="tel:+353862245599">+353 862245599</a> <br />
                    <a href="mailto:ben.clarke15@hotmail.com">ben.clarke15@hotmail.com</a>
                </p>
                </div>
                <div className="column w-1000-stack">
                <a href="assets/CV_-_Ben_Clarke.pdf" className="btn btn--download" download>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                    Download CV
                </a>
                </div>
            </div>
            </div>
        </div> {/* end row */}
        </section> {/* end s-about */}

      </React.Fragment>
    );
  }
}