import React, { Component } from "react";

import { Header, Layout, Navigation, Drawer, Content } from "react-mdl";

import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header
            className="header-color"
            title={
              <span>
                <strong>CURIEUX</strong>
              </span>
            }
            scroll
          >
            <Navigation>
              <Link to="/aboutme">AboutMe</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer title="CURIEUX">
            <Navigation>
              <Link to="/aboutme">AboutMe</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Main />
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
