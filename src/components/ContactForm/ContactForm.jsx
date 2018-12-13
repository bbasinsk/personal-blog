import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { navigateTo } from "gatsby-link";

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

import "./ContactForm.css";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/contact?no-cache=1", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .then(() => navigateTo(form.getAttribute("action")))
            .catch(error => alert(error));
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <form
                        className="contact-form"
                        name="contact"
                        method="post"
                        action="/thanks/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>
                                Don’t fill this out:{" "}
                                <input name="bot-field" onChange={this.handleChange} />
                            </label>
                        </p>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            fullWidth
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                            name="name"
                            type="text"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            id="outlined-email-input"
                            fullWidth
                            label="Email"
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            id="outlined-textarea"
                            label="Message"
                            fullWidth
                            name="message"
                            onChange={this.handleChange}
                            margin="normal"
                            multiline
                            rows="8"
                            variant="outlined"
                        />
                        <br />
                        <Button variant="outlined" type="submit" style={{ marginTop: '16px' }}>
                            Send
                        </Button>
                    </form>
                </div>
            </MuiThemeProvider>
        );
    }
}
