import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import ImageGalleryWrapper from "./ImageGalleryStyled";

const ImageGallery = ({ searchResalts }) => {
  return (
    <>
      <ImageGalleryWrapper>
        <ul className="ImageGallery">
          {searchResalts.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImageUrl={webformatURL}
                largeImageUrl={largeImageURL}
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
