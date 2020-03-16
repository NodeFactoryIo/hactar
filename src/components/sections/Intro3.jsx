import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

class Intro3 extends Component {
  state = {};
  render() {
    return (
      <section className="section section-intro1 section-intro3" id="intro3">
        <div className="container">
          <Grid container spacing={24} justify="center">
            <Grid item md={6}>
              <h1 className="section-intro1__title">
                Better Management; Less Expense
              </h1>
              <div className="section-intro1__subtitle">
                Not sure about Pro? Try trial first!
              </div>

              <div className="section-intro1__list">
                <div className="section-intro1__list__item text-muted">
                  <Icon color="secondary">check</Icon> Unlimited Projects.
                </div>
                <div className="section-intro1__list__item text-muted">
                  <Icon color="secondary">check</Icon> Unlimited Team Members.
                </div>
                <div className="section-intro1__list__item text-muted">
                  <Icon color="secondary">check</Icon> Unlimited Disk Space.
                </div>
              </div>

              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Download"
                className=""
                href="https://github.com/NodeFactoryIo/hactar-daemon/releases"
                target="_blank"
              >
                <Icon className="mr-16">cloud_download</Icon>
                Download
              </Fab>
            </Grid>
            <Grid item md={6}>
              <div className="intro3__product">
                <img
                  src="./assets/images/illustrations/2.svg"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Intro3;
