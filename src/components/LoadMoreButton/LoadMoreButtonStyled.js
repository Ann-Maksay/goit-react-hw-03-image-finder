import styled from "styled-components";

const LoadMoreButtonWrapper = styled.div`
  .Button {
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);

    margin-right: auto;
    margin-left: auto;
  }

  .Button:hover,
  .Button:focus {
    background-color: #303f9f;
  }
`;

export default LoadMoreButtonWrapper;
