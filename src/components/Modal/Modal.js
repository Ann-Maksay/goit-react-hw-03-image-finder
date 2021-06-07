import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import ModalWrapper from "./ModalStyled";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  static propTypes = {
    modalImgUrl: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModal);
  }

  closeModal = (e) => {
    // if (e.code === "Escape") {
    //   this.props.toggleModal("");
    //   return
    // }
    if (e.target === e.currentTarget || e.code === "Escape") {
      this.props.toggleModal("");
    }
  };

  render() {
    const { modalImgUrl } = this.props;

    return createPortal(
      <ModalWrapper>
        <div className="Overlay" onClick={this.closeModal}>
          <div className="Modal">
            <img src={modalImgUrl} alt="" />
          </div>
        </div>
      </ModalWrapper>,
      modalRoot
    );
  }
}

export default Modal;
