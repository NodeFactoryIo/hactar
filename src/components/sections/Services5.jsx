import React, { Component } from "react";
import { Tabs, Tab, Grid, Icon } from "@material-ui/core";

const featureListDefault = [
  {
    imageUrl: "./assets/images/screenshots/Login.png",
    title: "1. Register",
    text:
      "First, go to our Hactar app and register your account."
  },
  {
    imageUrl: "./assets/images/screenshots/Github.png",
    title: "2. Download & install",
    text:
    "Download Hactar daemon application and install it on server along your miner node. " +
    "Use same login credentials as you did in the previous step during registration.\n\n" +
    "Example:\n",
    code:
      "> wget https://github.com/NodeFactoryIo/hactar-daemon/releases/download/v1.0.0/hactar-linux-64bit\n" +
        "> chmod +x hactar-linux-64bit\n" +
      "> ./hactar-linux-64bit start\n"
  },
  {
    imageUrl: "./assets/images/screenshots/Dashboard.png",
    title: "3. Enjoy",
    text:
      "Leave your Hactar daemon app running and enjoy the incoming reports on Hactar app!"
  }
];

class Service5 extends Component {
  state = {
    value: 0,
    featureList: featureListDefault,
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentWillMount() {
    fetch("https://api.github.com/repos/nodefactoryio/hactar-daemon/releases")
      .then((response) => response.json())
      .then(response => {
        const tagName = response[0]["tag_name"];
        const updatedList = [...this.state.featureList];
        updatedList[1].code = updatedList[1].code.replace("v1.0.0", tagName);
        this.setState({ featureList: updatedList} );
      })
  }

  render() {
    const { value, featureList } = this.state;
    let feature = featureList[value];

    console.log(featureList);

    return (
      <div className="section section-service5 light-gray" id="service5">
        <div className="container">
          
          {/* tab view */}
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            variant="standard"
            scrollButtons="auto"
          >
            <Tab label="1. Register" />
            <Tab label="2. Install Hactar" />
            <Tab label="3. Enjoy" />
          </Tabs>

          <Grid
            container
            spacing={32}
            className="mt-16 fade-in"
            alignItems="center"
          >
            <Grid item lg={5} md={7} sm={12} xs={12}>
              <div className="service5__image-holder">
                <img className="elevation-3" src={feature.imageUrl} alt="building" />
              </div>
            </Grid>
            <Grid item lg={5} md={7} sm={12} xs={12}>
              <div className="service5__details">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <p>{feature.code}</p>

                <a className="text-brand" href="https://analytics.hactar.app"
                   target="_blank" rel="noopener noreferrer">
                  Hactar app
                  <Icon className="service5__link-icon">navigate_next</Icon>
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Service5;
