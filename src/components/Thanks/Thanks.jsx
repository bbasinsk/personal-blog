import React from 'react';
import { Link } from "gatsby";

import './Thanks.css';

class Thanks extends React.Component {
    render() {
        return (
            <div className="thanks">
                <h1>Thanks!</h1>
                <p>Your submission has been recieved.</p>
                <Link to="/">
                    {/* style={{ boxShadow: "none" }}> */}
                    <span>Go back home</span>
                </Link>
            </div>
        );
    }
}

export default Thanks;