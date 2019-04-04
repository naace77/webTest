import React, { Component } from "react";
import "assets/views/productPage/product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    document.querySelector("header").classList.add("font-dark");
    document.querySelector(".header-ul").classList.add("header-ul-dark");
    document.querySelector(".header-ul").classList.remove("header-ul");
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerWidth / 2 });
  };
  render() {
    return (
      <div
        className="Product-body"
        style={{
          width: this.state.width,
          height: this.state.height
        }}
      />
    );
  }
}

export default Product;
