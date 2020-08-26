import React from "react";
import "./BorderRadius.css";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-top: 10px;
  height: 0.6rem;
  -webkit-appearance: none;

  slider-runnable-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: green;
    border-radius: 25px;
    border: 0px solid #000101;
  }

  slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #65001c;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.6px;
  }
`;

const CustomBorderContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 50vw;
  height: 60vh;
  background-color: #f6f6f6;
  margin: auto auto;
  border-top-left-radius: ${(props) => `${props.values.slider1}%`};
  border-top-right-radius: ${(props) => `${props.values.slider2}%`};
  border-bottom-left-radius: ${(props) => `${props.values.slider3}%`};
  border-bottom-right-radius: ${(props) => `${props.values.slider4}%`};
`;

export default function BorderRadius() {
  const [slider1, setSlider1] = React.useState(0);
  const [slider2, setSlider2] = React.useState(0);
  const [slider3, setSlider3] = React.useState(0);
  const [slider4, setSlider4] = React.useState(0);

  return (
    <CustomBorderContainer
      values={{ slider1: slider1, slider2, slider3, slider4 }}
    >
      <div className="InputsContainer">
        <div className="InputsGridContainer">
          <div className="InputArea1">
            <span className="InputText">Top-Left</span>
            <StyledInput
              type="range"
              min="0"
              max="100"
              value={slider1}
              class="slider"
              id="slider1"
              onChange={(ev) => setSlider1(ev.target.value)}
            />
          </div>
          <div className="InputArea2">
            <span>Top-Right</span>
            <StyledInput
              type="range"
              min="0"
              max="100"
              value={slider2}
              class="slider"
              id="slider2"
              onChange={(ev) => setSlider2(ev.target.value)}
            />
          </div>

          <div className="Result">
            <span className="resultText">
              {`border-radius:${slider1}%    ${slider2}%    ${slider3}%    ${slider4}%`}{" "}
            </span>
          </div>
          <div className="InputArea3">
            <span>Bottom-Left</span>
            <StyledInput
              type="range"
              min="0"
              max="100"
              value={slider3}
              class="slider"
              id="slider3"
              onChange={(ev) => setSlider3(ev.target.value)}
            />
          </div>
          <div className="InputArea4">
            <span>Bottom-Right</span>
            <StyledInput
              type="range"
              min="0"
              max="100"
              value={slider4}
              onChange={(ev) => setSlider4(ev.target.value)}
              class="slider"
              id="slider4"
            />
          </div>
        </div>
      </div>
    </CustomBorderContainer>
  );
}
