import React, { Component } from "react";
import "assets/views/mainPage/Index.css";
import MainBanner from "components/banner/Main_banner";
const image01 = require("assets/img01.PNG");

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
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
        className="Index-body"
        style={{
          width: this.state.width,
          height: this.state.height
        }}
      >
        <MainBanner />
        {/* <PDFViewer backend={PDFJSBackend} src="./123444.pdf" /> */}
      </div>
    );
  }
}

export default Index;
