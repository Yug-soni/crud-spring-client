import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClientList from "./components/ClientList.component";
import ClientEdit from "./components/ClientEdit.component";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/clients" exact={true} component={ClientList}></Route>
          <Route path="/clients/:id" component={ClientEdit}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
