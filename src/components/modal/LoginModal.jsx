import React, { Component } from "react";
import Modal from "react-modal";

// JS 방식 스타일 적용
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  loginForm: {
    display: "flex",
    flexDirection: "column"
  }
};

Modal.setAppElement("#root");
class LoginModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <a onClick={this.openModal} className="Login-btn">
          LOGIN
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} // 인라인 스타일 주는 방식
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>로그인</h2>
          <form style={customStyles.loginForm}>
            <input />
            <input />
            <button onClick={this.closeModal}>LOGIN</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
