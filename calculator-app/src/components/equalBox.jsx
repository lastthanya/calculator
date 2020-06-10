import React from "react";
import styled from "styled-components";
const EqualBoxArea = styled.div`
  grid-area: equal;
  border: solid 2px pink;
`;
const EqualBox = () => {
  return <EqualBoxArea>EqualBox</EqualBoxArea>;
};

export default EqualBox;
