import React, { Component } from "react";
import "assets/views/mainPage/Index.css";

class Main_banner extends Component {
  render() {
    return (
      <div className="Main-banner">
        <p
          style={{ color: "#00a0e9", fontSize: "2vmin", margin: "1%" }}
        >{`인사 · 급여 업무 통합 관리`}</p>
        <p
          style={{ color: "#fff", fontSize: "5vmin", margin: "1%" }}
        >{`Smart Payroll`}</p>
        <p style={{ color: "#fff", fontSize: "2vmin", margin: "1%" }}>
          스마트한 인사 · 급여 프로그램 <br /> 인사 급여 ERP 급여박사
        </p>
      </div>
    );
  }
}

export default Main_banner;
