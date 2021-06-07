import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ smallImageUrl, toggleModal }) => {
  const handleClick = () => {
    toggleModal(smallImageUrl);
  };
  return (
    <li className="ImageGalleryItem" onClick={handleClick}>
      <img src={smallImageUrl} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallImageUrl: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
