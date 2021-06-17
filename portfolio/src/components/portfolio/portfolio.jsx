import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
            <div className="column large-12">
            <h3>A Few Of My Latest Creations</h3>
            </div>
        </div>
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
            <div className="column folio-item">
            <a href="https://adaptivefootballcoaching.ie" className="folio-item__thumb">
                <img src="images/portfolio/AFCSocials.jpg"></img>
            </a>
            </div> {/* end folio-item */}
            <div className="column folio-item">
            <a href="https://capocrimini.com" className="folio-item__thumb">
                <img src="images/portfolio/Capo Crimini.png"></img>
            </a>
            </div> {/* end folio-item */}
            <div className="column folio-item">
            <a href="#modal-03" className="folio-item__thumb">
                <img src="images/portfolio/GitHub-Mark.png"></img>
            </a>
            </div> {/* end folio-item */}
            <div className="column folio-item">
            <a href="https://rubystudentassistant.netlify.app/" className="folio-item__thumb">
                <img src="images/portfolio/studentBotLogo.jpg"></img>
            </a>
            </div> {/* end folio-item */}
        </div> {/* end folio-list */}
        </section>

      </React.Fragment>
    );
  }
}