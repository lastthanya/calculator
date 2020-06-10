import React from "react";
import styled from "styled-components";
const ResultBoxArea = styled.div`
  grid-area: result;
  border: solid 2px red;
`;
const ResultBox = () => {
  return <ResultBoxArea>ResultBox</ResultBoxArea>;
};

export default ResultBox;
