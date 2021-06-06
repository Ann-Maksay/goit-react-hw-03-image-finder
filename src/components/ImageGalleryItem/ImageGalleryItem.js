import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ smallImageUrl, largeImageUrl }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={smallImageUrl} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
