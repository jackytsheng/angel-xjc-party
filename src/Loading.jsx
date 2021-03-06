import React from 'react';
import styled from 'styled-components';
import colors from './colors';

const LoadWrapper = styled.div`
  position: absolute;
  width: 600px;
  height: 36px;
  left: 50%;
  top: 40%;
  margin-left: -300px;
  overflow: visible;
  cursor: default;
  div {
    position: absolute;
    width: 20px;
    height: 36px;
    opacity: 0;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 25px;
    font-weight: 600;
    animation: move 2s linear infinite;
    transform: rotate(180deg);
    color: ${colors.DARK};
  }

  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
  div:nth-child(4) {
    animation-delay: 0.6s;
  }
  div:nth-child(5) {
    animation-delay: 0.8s;
  }
  div:nth-child(6) {
    animation-delay: 1s;
  }
  div:nth-child(7) {
    animation-delay: 1.2s;
  }

  @keyframes move {
    0% {
      left: 0;
      opacity: 0;
    }
    35% {
      left: 41%;
      transform: rotate(0deg);
      opacity: 1;
    }
    65% {
      left: 59%;
      transform: rotate(0deg);
      opacity: 1;
    }
    100% {
      left: 100%;
      transform: rotate(-180deg);
      opacity: 0;
    }
  }
`;

const Main = styled.div`
  background-color: ${colors.BACK_GROUND};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  animation: fade 3s;

  @keyframes fade {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default () => (
  <Main>
    <LoadWrapper>
      <div>G</div>
      <div>N</div>
      <div>I</div>
      <div>D</div>
      <div>A</div>
      <div>O</div>
      <div>L</div>
    </LoadWrapper>
  </Main>
);
