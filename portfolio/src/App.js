import React, {Component } from 'react';
import Header from './components/header/header';
import Home from './components/hero/hero';
import AboutMe from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';


class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Home />
        <AboutMe />
        <Resume />
        <Portfolio />
        {/* <Testimonials /> */}
        <ContactUs />
        <Footer />
      </div>
    )
  }
}

export default App;
