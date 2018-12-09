import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import "./About.css";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="about">
        <h1>
          Use the form below to get in contact!
        </h1>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(About)
