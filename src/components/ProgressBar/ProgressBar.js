/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

// const ProgressBar = ({ value, size }) => {
//   return (
//     <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" value={value} size={size}>
//       <BarFill value={value} size={size}/>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   background-color: ${COLORS.transparentGray15};
//   border-radius: ${(p) => p.size === 'large' ? '8px' : '4px'};
//   padding: ${(p) => p.size === 'large' ? '4px' : ''};
// `

// const BarFill = styled.div`
//   background-color: ${COLORS.primary};
//   height: ${(p) => p.size === 'small' ? '8px' : p.size === 'medium' ? '12px' : '24px'};
//   width: ${(p) => p.value}%;
//   border-radius: ${(p) => p.size === 'large' && p.value >= 99 ? `4px ${(p.value-99)*4}px ${(p.value-99)*4}px 4px` : '4px 0 0 4px'};
// `

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if(!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow="20"
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--radius": styles.radius + "px",
        "--padding": styles.padding + "px",
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
