import React, { Component } from "react";
import Loader from "react-loader-spinner";
import LoaderWrapper from "./LoaderStyled";

class LoaderComponent extends Component {
  //other logic
  render() {
    return (
      <LoaderWrapper>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </LoaderWrapper>
    );
  }
}

export default LoaderComponent;
