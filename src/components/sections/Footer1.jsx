import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class Footer1 extends Component {
  state = {};
  render() {
    return (
      <div className="section-footer1 light-dark" id="footer1">
        <div className="container">
          <Grid container>
            <Grid item lg={9} md={9} sm={12}>
              <div className="footer1__about">
                <h4>About Us</h4>
                <p>
                  Hactar is developed by <a rel="noopener noreferrer" target="_blank" href="https://nodefactory.io">NodeFactory
                </a> as part of Filecoin’s Wave 1 development grant.
                </p>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={12}>
              <div className="footer1__disclaimer">
                <h4>Contact</h4>

                <div className="mt-32 footer1__disclaimer__link">
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/NodeFactoryIo/hactar" className="px-8">
                    <img src="./assets/images/social-github.png" alt="Github" />
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/nodefactoryio" className="px-8">
                    <img src="./assets/images/social-twitter.svg" alt="Twitter" />
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://discord.gg/jHNvhd7" className="px-8">
                    <img src="./assets/images/social-discord.svg" alt="Discord" />
                  </a>
                  
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Footer1;
