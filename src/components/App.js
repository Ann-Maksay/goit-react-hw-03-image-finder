import React, { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

import "./App.scss";

class App extends Component {
  state = {
    filter: "",
  };

  onSearch = (value) => {
    this.setState({ filter: value });
  };

  // onLoadMore = () => {
  //   this.setState((prevState) => ({ page: prevState.page + 1 }));
  // };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <Searchbar onSearch={this.onSearch} />
        {filter && <ImageGallery value={filter} />}
      </div>
    );
  }
}

export default App;
