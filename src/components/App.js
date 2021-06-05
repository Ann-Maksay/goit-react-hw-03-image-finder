import React, { Component } from "react";

import "./App.scss";

class App extends Component {
  state = {
    page: 1,
    filter: "",
    searchResalts: [],
  };

  onSearch = (value) => {
    this.setState({ page: 1, filter: value });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    return <div></div>;
  }
}

export default App;
