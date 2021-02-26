import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateY(-200px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    width: 310px;
  }
`;

export const SVGWrapper = styled.svg`
  margin-bottom: 2rem;
`;
