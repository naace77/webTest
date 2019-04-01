import React, { Component } from "react";
import "assets/components/header/HeaderMain.css";
import LoginModal from "components/modal/LoginModal";
class HeaderMain extends Component {
  render() {
    return (
      <header className="App-header">
        {/* <p>이쪽이 헤더 부분</p> */}
        <nav>
          <ul className="header-ul">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about/">About</a>
            </li>
            <li>
              <a href="/users/">Users</a>
            </li>
          </ul>
        </nav>
        <LoginModal />
      </header>
    );
  }
}

export default HeaderMain;
