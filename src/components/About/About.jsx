import React, { Component } from "react";
import Contact from '../Contact/Contact';

import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>
          Get in contact!
        </h1>
        <Contact />
      </div >
    );
  }
}

export default About;
