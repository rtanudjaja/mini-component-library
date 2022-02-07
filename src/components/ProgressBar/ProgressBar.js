/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" value={value} size={size}>
      <BarFill value={value} size={size}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: ${(p) => p.size === 'large' ? '8px' : '4px'};
  padding: ${(p) => p.size === 'large' ? '4px' : ''};
`


const BarFill = styled.div`
  background-color: ${COLORS.primary};
  height: ${(p) => p.size === 'small' ? '8px' : p.size === 'medium' ? '12px' : '24px'};
  width: ${(p) => p.value}%;
  border-radius: ${(p) => p.size === 'large' && p.value >= 99 ? `4px ${(p.value-99)*4}px ${(p.value-99)*4}px 4px` : '4px 0 0 4px'};
`

export default ProgressBar;
