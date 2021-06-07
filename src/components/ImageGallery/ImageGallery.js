import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import ImageGalleryWrapper from "./ImageGalleryStyled";

const ImageGallery = ({ searchResalts, toggleModal }) => {
  return (
    <>
      <ImageGalleryWrapper>
        <ul className="ImageGallery">
          {searchResalts.map(({ id, webformatURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImageUrl={webformatURL}
                toggleModal={toggleModal}
              />
            );
          })}
        </ul>
      </ImageGalleryWrapper>
    </>
  );
};

ImageGallery.propTypes = {
  searchResalts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ).isRequired,
};

export default ImageGallery;
