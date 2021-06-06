import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchImg from "../../api/pixbay-api";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  state = {
    page: 1,
    searchResalts: [],
  };

  componentDidMount() {
    const { value } = this.props;
    const { page } = this.state;
    fetchImg(value, page).then(({ hits }) => {
      const newResults = hits.map((elem) => {
        return {
          id: elem.id,
          webformatURL: elem.webformatURL,
          largeImageURL: elem.largeImageURL,
        };
      });
      this.setState({ searchResalts: newResults });
    });
  }

  render() {
    const { searchResalts } = this.state;

    return (
      <>
        <ul>
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
      </>
    );
  }
}

export default ImageGallery;
