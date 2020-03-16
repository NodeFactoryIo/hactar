import React, { Component } from "react";
import { scrollTo } from "../Utils";
import Service4 from "./sections/Services4";
import Service5 from "./sections/Services5";
import Intro3 from "./sections/Intro3";
import TopBar from "./sections/TopBar3";
import Footer1 from "./sections/Footer1";

class Home extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo('root');
  }
  
  render() {
    return (
      <div className="landing">
        <TopBar/>
        <Intro3/>
        <Service4 />
        <Service5 />
        <Footer1 />
      </div>
    );
  }
}

export default Home;
