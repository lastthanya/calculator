import React, { Component } from "react";
import styled from "styled-components";
import CancelBox from "./components/cancelBox";
import EqualBox from "./components/equalBox";
import OperatorsBox from "./components/operatorsBox";
import PadNumberBox from "./components/padNumbersBox";
import ResultBox from "./components/resultBox";
const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: solid 2px red;
`;
const CalculatorBox = styled.div`
  display: grid;
  width: 700px;
  height: 500px;
  grid-template: "result result" 2fr "padnumber cancel" 1fr "padnumber operators" 1fr "padnumber equal" 1fr / 3fr 4fr;
  border: solid 2px blueviolet;
  /* grid-gap: 10px; */
`;

class Calculator extends Component {
  render() {
    return (
      <ContainerBox>
        <CalculatorBox>
          <ResultBox />
          <PadNumberBox />
          <CancelBox />
          <OperatorsBox />
          <EqualBox />
        </CalculatorBox>
      </ContainerBox>
    );
  }
}

export default Calculator;
