import React from "react";
import "./BorderRadius.css";
import styled from "styled-components";
const StyledInput = styled.input`
  height: 2rem;
`;

const CustomBorderContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 50vw;
  height: 60vh;
  background-color: #f6f6f6;
  justify-content: center;
  border-top-left-radius: ${(props) => `${props.values.slider1}px`};
  border-top-right-radius: ${(props) => `${props.values.slider2}px`};
  border-bottom-left-radius: ${(props) => `${props.values.slider3}px`};
  border-bottom-right-radius: ${(props) => `${props.values.slider4}px`};
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
            <span>
              {`border-radius:${slider1}px    ${slider2}px    ${slider3}px    ${slider4}px`}{" "}
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
