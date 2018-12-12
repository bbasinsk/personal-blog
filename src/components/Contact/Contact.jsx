import React from "react";
import TextField from '@material-ui/core/TextField';
import { navigateTo } from "gatsby-link";

import "./Contact.css";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Contact extends React.Component {
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
            <div>
                <form
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
                    <p>
                        <TextField
                            id="outlined-name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                            name="name"
                            type="text"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <TextField
                            id="outlined-textarea"
                            label="Message"
                            name="message"
                            onChange={this.handleChange}
                            multiline
                            // margin="normal"
                            variant="outlined"
                        />
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        );
    }
}
