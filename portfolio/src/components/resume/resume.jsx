import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
            <div className="resume-block">
                <div className="resume-block__header">
                <h4 className="h3">Davy</h4>
                <p className="resume-block__header-meta">
                    <span>Manual/Automation Tester </span> 
                    <span className="resume-block__header-date">
                    4/2020 – 09/2020 
                    </span>
                </p>
                </div>
                <p>
                    <ul>
                        <li>Responsible for the planning, design and development of the new automated compatibility testing framework.</li>
                        <li>Responsible for the planning, design and development of the new automated compatibility testing framework.</li>
                        <li>Supporting in a number of core functional releases across Linux and web-based systems.</li>
                        <li>Participating SCRUM meetings, sprint review and poker planning sessions.</li>
                        <li>Responsible for Test planning, design and execution of key business initiatives.</li>
                    </ul> 
                </p>
            </div> {/* end resume-block */}
            <div className="resume-block">
                <div className="resume-block__header">
                <h4 className="h3">Fenergo</h4>
                <p className="resume-block__header-meta">
                    <span>Manual Tester </span> 
                    <span className="resume-block__header-date">
                    06/2019 – 09/2019 
                    </span>
                </p>
                </div>
                <p>
                    <ul>
                        <li>Reviewing, writing, and running manual test suites via Excel and Microsoft Test Manager.</li>
                        <li>Attending and partaking in Agile based team meetings with multi time-zone teams.</li>
                        <li>Worked closely with project owners for accurate defect reporting and to ensure accurate testing requirements and guidelines</li>
                        <li>Participated in the Annual company Hackathon.</li>
                        Entry was a live analytics Microsoft Teams bot that gives managers accurate and up to date information on projects being discussed in daily or weekly agile meetings. Information was retrieved directly from TFS using Python and Microsoft’s WIQL
                    </ul>
                </p>
            </div> {/* end resume-block */}
            </div>
        </div> {/* s-resume__section */}
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Education</h3>
            </div>
            <div className="column large-9 tab-12">
            <div className="resume-block">
                <div className="resume-block__header">
                <h4 className="h3">Dublin City University</h4>
                <p className="resume-block__header-meta">
                    <span>B.Sc. Degree in Computer Applications and Software Engineering</span> 
                    <span className="resume-block__header-date">
                    June 2021
                    </span>
                </p>
                </div>
                <p>
                    For my final year project I created a multi-lingual, multi-platform personal assistant that uses FaaS and PaaS with Docker, Python 3 and Rasa NLU framework to deliver daily information in the language of the user, distinguished by the users typed language, straight to their messaging app. 
                </p>
            </div> {/* end resume-block */}
            </div>
        </div> {/* s-resume__section */}
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
            <div className="resume-block">
                <p>
                <b>Skilled in</b>: Python, Java, Selenium, API’s, pair programming, group work, project deadlines, presentation skills.<br></br>
                <b>Good understanding of</b>: Docker, Networking, Object Orientated design, FaaS, PaaS, relational and non-relational Databases, SQL, Jenkins, HTML, CSS, x86 assembly, x64 assembly, miips. Javascript, Prolog, R, Haskell, Linux, PHP, HTML, CSS, Linux, Windows, JBehave.<br></br>
                <b>Software packages</b>: MySql Workbench, Wireshark, win-miips64, Microsoft Visual Studio, Microsoft Visual Studio Code, Atom, PyUnit, Git, Laravel, IntelliJ 
                </p>
                {/*<ul className="skill-bars-fat">
                <li>
                    <div className="progress percent85" />
                    <strong>HTML</strong>
                </li>
                <li>
                    <div className="progress percent85" />
                    <strong>CSS</strong>
                </li>
                <li>
                    <div className="progress percent65" />
                    <strong>Javascript</strong>
                </li>
                </ul>
            </div> {/* end resume-block */}
            </div>
            </div>
        </div> {/* s-resume__section */}
        </section> {/* end s-resume */}

      </React.Fragment>
    );
  }
}