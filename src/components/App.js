import React, { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import LoaderComponent from "./LoaderComponent/LoaderComponent";

import fetchImg from "../api/pixbay-api";

import "./App.scss";

class App extends Component {
  state = {
    filter: "",
    page: 1,
    searchResalts: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.filter !== this.state.filter ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      this.updateSearchResalt();
    }
    if (prevState.searchResalts !== this.state.searchResalts) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onSearch = (value) => {
    this.setState({ filter: value, page: 1, searchResalts: [] });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  updateSearchResalt = () => {
    const { page, filter } = this.state;
    fetchImg(filter, page)
      .then((newResults) => {
        this.setState((prevState) => ({
          searchResalts: [...prevState.searchResalts, ...newResults],
          isLoading: false,
        }));
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { searchResalts, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSearch={this.onSearch} />
        {searchResalts.length >= 1 && (
          <>
            <ImageGallery searchResalts={searchResalts} />
            {isLoading ? (
              <LoaderComponent />
            ) : (
              <LoadMoreButton loadMore={this.onLoadMore} />
            )}
          </>
        )}
        {isLoading && <LoaderComponent />}
      </div>
    );
  }
}

export default App;
