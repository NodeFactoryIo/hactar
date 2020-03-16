import React, { Component } from "react";
import { scrollTo } from "../Utils";
import Features from "./sections/Services4";
import GettingStarted from "./sections/Services5";
import Intro from "./sections/Intro3";
import TopBar from "./sections/TopBar3";
import Footer from "./sections/Footer1";

class Home extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo('root');
  }
  
  render() {
    return (
      <div className="landing">
        <TopBar />
        <Intro />
        <Features />
        <GettingStarted />
        <Footer />
      </div>
    );
  }
}

export default Home;
