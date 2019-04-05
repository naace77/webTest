import React, { Component } from "react";
import "assets/components/banner/Center_banner.css";

class Center_banner extends Component {
  render() {
    return (
      <div
        className="Center-banner"
        style={{ width: this.props.width, height: this.props.height }}
      >
        <p>급여박사 사업분야</p>
        <p>급여 전문 사업으로 급여아웃소싱</p>
        <div className="Center-banner-card-container">
          <div
            style={{
              width: this.props.width / 5,
              height: this.props.width / 5,
              backgroundColor: "#000",
              margin: "30px"
            }}
          />
          <div
            style={{
              width: this.props.width / 5,
              height: this.props.width / 5,
              backgroundColor: "#000",
              margin: "30px"
            }}
          />
          <div
            style={{
              width: this.props.width / 5,
              height: this.props.width / 5,
              backgroundColor: "#000",
              margin: "30px"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Center_banner;
