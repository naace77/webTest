import React, { Component } from "react";
import "assets/components/banner/Border_banner.css";

class Border_banner extends Component {
  render() {
    return (
      <div className="border-container">
        <div
          style={{
            width: "25%",
            backgroundColor: "#ffdd11",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          {" "}
          <p>NOTICE</p>
        </div>
        <div
          style={{
            width: "25%",
            backgroundColor: "#ffdddd",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {" "}
          <p>급여박사APP_관리자용 사용 설명서</p>
        </div>{" "}
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffdddd"
          }}
        >
          <p>2019-03-19</p>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#000",
              marginLeft: "3%"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Border_banner;
