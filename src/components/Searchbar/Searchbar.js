import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchbarWrapper from "./SearchbarStyled";

class Searchbar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    searchValue: "",
  };

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  handleSabmit = (e) => {
    e.preventDefault();
    const { searchValue } = this.state;
    this.props.onSearch(searchValue);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ searchValue: "" });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <header className="Searchbar">
        <SearchbarWrapper>
          <form className="SearchForm" onSubmit={this.handleSabmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={searchValue}
              onChange={this.handleInput}
            />
          </form>
        </SearchbarWrapper>
      </header>
    );
  }
}

export default Searchbar;
