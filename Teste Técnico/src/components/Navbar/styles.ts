import styled from 'styled-components';

export const Container = styled.nav`
  width: 330px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;

    li {
      text-align: center;
      font-size: 14px;
      width: 110px;
      border-radius: 10px 10px 0 0;
      padding: 5px;
      cursor: pointer;
      background: #292929;
    }

    .selected {
      background: #ffce00;
      color: #333;
      font-weight: 500;
    }
  }
`;
