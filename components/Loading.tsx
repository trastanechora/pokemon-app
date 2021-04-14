/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import React from 'react';

import PokeballIcon3D from '../components/icons/PokeballIcon3D';

const spinAnimation = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const loadingSection = css`
  text-align: center;
  margin-top: 30vh;
  font-family: 'Roboto', sans-serif;
`;

const icon3D = css`
  animation: ${spinAnimation} 1s infinite;
`;

const label = css`
  margin-top: 20px;
  font-weight: lighter;
  color: red;
  font-style: italic;
`;

const Loading = () => {
  return (
    <div css={loadingSection}>
      <PokeballIcon3D css={icon3D} />
      <div css={label}>
        Loading.. <br />
        Please wait.
      </div>
    </div>
  );
};

export default Loading;
