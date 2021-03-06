## React Study

### `React Router 설치`

npm install --save react-router-dom

### `폴더 구조 구성`

1.src/assets : style 관련 파일들  
2.src/views : 페이지 관련 파일들  
3.src/components : 공통으로 쓰일 컴포넌트 들

### `env 설정`

경로 설정 : .env file 생성

### `파일 추가 방법`

views/mainPage/Index.jsx : 뷰 페이지 생성  
assets/mainPage/Index.css : 뷰 페이지에 입힐 css 파일 생성

### `js식 스타일 주기`

LoginModal.jsx

### `MOBILE CSS`

```css
@media screen and (max-width: 760px) {
  .header-mobile {
    display: flex;
  }
  .header-web {
    display: none;
  }
}
```

### `MOBILE CSS`

```javascript
{
  this.state.width > 760 ? (
    <CenterBanner width={this.state.width} height={this.state.height} />
  ) : (
    <CenterBannerMobile width={this.state.width} height={this.state.height} />
  );
}
```

### `WINDOW SIZE`

```javascript
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
```

### `CLASS add / remove`

```javascript
document.querySelector("header").classList.add("font-dark");
document.querySelector(".header-ul").classList.add("header-ul-dark");
document.querySelector(".header-ul").classList.remove("header-ul");
```
