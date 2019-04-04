import React, { Component } from "react";
import "assets/views/mainPage/Main.css";
import HeaderMain from "components/header/HeaderMain";
import Footer from "components/footer/Footer";
import Index from "views/mainPage/Index";
import Product from "views/productPage/Product";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Users() {
  return <h2>Users</h2>;
}
class Main extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMain />
        <Router>
          <div>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={Product} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Main;
