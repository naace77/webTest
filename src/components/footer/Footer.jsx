import React, { Component } from "react";
import "assets/components/footer/Footer.css";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerTitle: [
        { key: 0, value: "회사소개" },
        { key: 1, value: "공지사항" },
        { key: 2, value: "업무 자료" },
        { key: 3, value: "매뉴얼" },
        { key: 4, value: "이용 정보" },
        { key: 5, value: "사이트 맵" }
      ],
      footerSub: [
        { TitleKey: 0, value: "회사연셕", link: "#" },
        { TitleKey: 0, value: "주요 고객사", link: "#" },
        { TitleKey: 0, value: "오시는 길", link: "#" },
        { TitleKey: 1, value: "공지사항", link: "#" },
        { TitleKey: 2, value: "업무 자료실", link: "#" },
        { TitleKey: 2, value: "급여박사 영상", link: "#" },
        { TitleKey: 3, value: "APP 매뉴얼", link: "#" },
        { TitleKey: 3, value: "PC 매뉴얼", link: "#" },
        { TitleKey: 4, value: "개인정보취급방침", link: "#" },
        { TitleKey: 4, value: "이메일 수집 거부", link: "#" },
        { TitleKey: 4, value: "이용 약관", link: "#" },
        { TitleKey: 5, value: "사이트 맵", link: "#" }
      ]
    };
  }
  render() {
    return (
      <footer className="App-Footer">
        <div className="footer-container">
          <div className="footer-top">
            {this.state.footerTitle.map((item, index) => {
              return (
                <div className="footer-title-container">
                  <label className="footer-title">{item.value}</label>
                  {this.state.footerSub.map((itemSub, index) => {
                    if (item.key === itemSub.TitleKey) {
                      return (
                        <a className="footer-title-sub" href={itemSub.link}>
                          {itemSub.value}
                        </a>
                      );
                    }
                  })}
                </div>
              );
            })}
            <div className="footer-top-iconList">
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#000",
                  margin: "5px"
                }}
              />
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#000",
                  margin: "5px"
                }}
              />
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#000",
                  margin: "5px"
                }}
              />
            </div>
          </div>
          <div className="footer-bottom">
            <div>ICON</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>급여박사</p>
              <p>인사 급여 관리 통합 솔루션</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <p>(주)라인페이롤서비스 ~~</p>
              <p>ㅌㅎㅇ산펀먀옵산ㄱㅎ볺~~</p>
              <p>충북 청주시 ~~~</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>1588-1965</p>
              <p>본사 043-277-8668</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
