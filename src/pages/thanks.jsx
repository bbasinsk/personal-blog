import React, { Component } from "react";
import Helmet from "react-helmet";
import Thanks from "../components/Thanks/Thanks";
import config from "../../data/SiteConfig";

class ThanksPage extends Component {
  render() {
    return (
      <div className="thanks-container">
        <Helmet title={`Thanks | ${config.siteTitle}`} />
        <Thanks />
      </div>
    );
  }
}

export default ThanksPage;
