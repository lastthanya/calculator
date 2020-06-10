import React from "react";
import styled from "styled-components";
const CancelBoxArea = styled.div`
  grid-area: cancel;
  border: solid 2px gold;
`;
const CancelBox = () => {
  return <CancelBoxArea>Cancel Box</CancelBoxArea>;
};

export default CancelBox;
