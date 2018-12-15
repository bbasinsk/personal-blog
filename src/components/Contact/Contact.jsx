import React, { Component } from "react";
import ContactForm from '../ContactForm/ContactForm';

import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 style={{ color: '#EEEEEE' }}>
          Get in contact!
        </h1>
        <ContactForm />
      </div >
    );
  }
}

export default Contact;
