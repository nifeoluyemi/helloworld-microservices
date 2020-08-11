import React, { Component } from 'react';
import "./app.scss";
import { Content } from "carbon-components-react/lib/components/UIShell";
import SiteHeader from "./components/SiteHeader";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import NewPage from "./content/NewPage";

class App extends Component {
  render() {
    return (
      <>
        <SiteHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/new" component={NewPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
