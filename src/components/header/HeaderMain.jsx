import React, { Component } from "react";
import "assets/components/header/HeaderMain.css";
import LoginModal from "components/modal/LoginModal";
class HeaderMain extends Component {
  render() {
    return (
      <header className="App-header">
        {/* <p>이쪽이 헤더 부분</p> */}
        <div className="header-web">
          <nav>
            <ul className="header-ul">
              <li>
                <a href="/">상품 소개</a>
              </li>
              <li>
                <a href="/about/">요금안내</a>
              </li>
              <li>
                <a href="/users/">간편 급여 계산기</a>
              </li>
              <li>
                <a href="/users/">고객 지원</a>
              </li>
              <li>
                <LoginModal />
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-mobile">
          <p>모바일 메뉴</p>
        </div>
      </header>
    );
  }
}

export default HeaderMain;
