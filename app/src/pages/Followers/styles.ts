import styled from 'styled-components';

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
`;

export const Content = styled.div`
  background: #292929;
  width: 400px;
  height: calc(100% - 66px);
  position: relative;
  overflow: auto;

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
`;

export const FollowContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #424242;
  cursor: pointer;

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
