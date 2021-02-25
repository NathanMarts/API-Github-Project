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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 1rem;

  p {
    font-weight: 500;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    font-size: 14px;
    cursor: pointer;

    svg {
      color: #c53030;
      margin-left: 10px;
    }
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
  height: 100%;
  margin-top: 80px;
  position: relative;
  padding-top: 6rem;

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

export const InfoContainer = styled.div`
  padding-left: 2rem;
  padding-bottom: 2rem;

  h1 {
    margin-bottom: 8px;
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

export const FollowContainer = styled.div`
  display: flex;
  background: #383838;
  justify-content: space-around;
  padding: 1rem 0;
  text-align: center;
`;

export const BioContainer = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;

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
