import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <LoadingUI>Loading...</LoadingUI>;
};

export default Loading;

const LoadingUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 33rem);
  font-weight: 200;
  color: #111;
  font-size: 1.8rem;
`;
