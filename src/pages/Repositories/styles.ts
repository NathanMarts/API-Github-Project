import styled, { keyframes } from 'styled-components';

const appearFromOpacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1.5rem;

  animation: ${appearFromOpacity} 1s;

  h4 {
    width: 100%;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  background: #1f1f1f;
  width: 400px;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #000;
`;

export const Content = styled.div`
  background: #292929;
  width: 400px;
  height: calc(100% - 66px);
  position: relative;
  overflow: auto;

  animation: ${appearFromOpacity} 1s;

  ::-webkit-scrollbar-track {
    background-color: #323232;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background: #292929;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }
  ::-webkit-scrollbar-button {
  }

  .avatar {
    width: fit-content;
    position: absolute;
    left: 0;
    right: 0;
    top: -65px;
    bottom: 0;
    margin: 0 auto;
  }
`;

export const ReposContainer = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #424242;

  h4 {
    margin-top: 8px;
  }

  p {
    margin: 6px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 300;
      font-size: 14px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }
  }

  &::before {
    content: '.';
    background: #ffce00;
    width: 20px;
    height: 36px;
    position: absolute;
    border-radius: 8px;
    left: -10px;
  }
`;
