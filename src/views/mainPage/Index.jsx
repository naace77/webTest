import React, { Component } from "react";
import "assets/views/mainPage/Index.css";
import MainBanner from "components/banner/Main_banner";
import BorderBanner from "components/banner/Border_banner";
import CenterBanner from "components/banner/Center_banner";
import CenterBannerMobile from "components/banner/Center_banner_mobile";
const image01 = require("assets/img01.PNG");

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.handleScroll);
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerWidth / 2 });
  };
  handleScroll = event => {
    if (window.scrollY < 30) {
      document
        .querySelector(".App-header")
        .classList.remove("header-ul-background");
    } else {
      document
        .querySelector(".App-header")
        .classList.add("header-ul-background");
    }
  };
  render() {
    return (
      <div>
        <div className="Index-body" style={{}}>
          <MainBanner width={this.state.width} height={this.state.height} />
          <BorderBanner />
          {this.state.width > 760 ? (
            <CenterBanner width={this.state.width} height={this.state.height} />
          ) : (
            <CenterBannerMobile
              width={this.state.width}
              height={this.state.height}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Index;
