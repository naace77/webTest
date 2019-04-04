import React, { Component } from "react";
import "assets/views/mainPage/Main.css";
import HeaderMain from "components/header/HeaderMain";
import Footer from "components/footer/Footer";
import Index from "views/mainPage/Index";
import { BrowserRouter as Router, Route } from "react-router-dom";

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
class Main extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMain />
        <Router>
          <div style={{ display: "bolck" }}>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Main;
