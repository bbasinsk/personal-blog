import React, { Component } from "react";
import Helmet from "react-helmet";
import Thanks from "../components/Thanks/Thanks";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Footer from "../components/Footer/Footer";
import Layout from "../components/layout";
import config from "../../data/SiteConfig";

class ThanksPage extends Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <Layout location={this.props.location}>
        <Drawer isOpen={this.state.menuOpen}>
          <Helmet title={`Thanks | ${config.siteTitle}`} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />
          <SiteWrapper>
            {/* All the main content gets inserted here */}
            <div className="thanks-page">
              {/* The big featured header */}
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
              <Thanks />
            </div>
            {/* The tiny footer at the very bottom */}
            <Footer
              copyright={config.copyright}
              promoteGatsby={config.promoteGatsby}
            />
          </SiteWrapper>
        </Drawer>
      </Layout>
    );
  }
}

export default ThanksPage;
