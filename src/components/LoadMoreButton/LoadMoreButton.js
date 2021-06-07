import React from "react";
import PropTypes from "prop-types";

import LoadMoreButtonWrapper from "./LoadMoreButtonStyled";

const LoadMoreButton = ({ loadMore }) => {
  return (
    <LoadMoreButtonWrapper>
      <button className="Button" type="button" onClick={loadMore}>
        Load more
      </button>
    </LoadMoreButtonWrapper>
  );
};

LoadMoreButton.propType = {
  loadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
