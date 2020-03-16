import React from "react";
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Theme from "./Theme";
import Home from "./components/Home";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Router basename="/">
        <Home />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
