import React, { Component } from "react";
import { Grid, Card, Icon } from "@material-ui/core";

class Service4 extends Component {
  state = {};
  cardList = [
    {
      icon: "phonelink",
      title: "Easy access",
      text:
        "Hactar is a web app so you can connect remotely to check your nodes from any device anywhere!"
    },
    {
      icon: "account_balance",
      title: "Current status",
      text:
        "Does your node need update? Get current status of your Filecoin miner, check disk occupancy and if your node is online."
    },
    {
      icon: "dvr",
      title: "Data insights",
      text:
        "Wondering what has happened? Track history of your nodes events and earnings such as mining rewards and deals."
    },
    {
      icon: "alarm",
      title: "Offline monitoring",
      text:
        "Get notified instantly when your node goes down, decrease your chances of losing your collateral."
    }
  ];
  render() {
    return (
      <div className="section section-service4" id="service4">
        <div className="container">
          <div className="section__header">
            <h2>What Hactar offers</h2>
            <p>Have your mining performance insights always at your fingertips.</p>
          </div>
          <div className="text-center">
            <Grid container spacing={40}>
              {this.cardList.map((card, index) => (
                <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                  <Card className="service4__card card">
                    <Icon className="service4__card__icon">{card.icon}</Icon>
                    <div className="service4__card__description">
                      <h3>{card.title}</h3>
                      <p className="m-0">{card.text}</p>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Service4;
