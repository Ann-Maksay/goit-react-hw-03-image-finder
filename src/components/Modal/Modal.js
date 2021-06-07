import React from "react";
import PropTypes from "prop-types";
import ModalWrapper from "./ModalStyled";

const Modal = ({imgUrl}) => {
  return (
    <ModalWrapper>
      <div className="Overlay">
        <div className="Modal">
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </ModalWrapper>
  );
};


Modal.propTypes = {
    imgUrl: PropTypes.string.isRequired;
}

