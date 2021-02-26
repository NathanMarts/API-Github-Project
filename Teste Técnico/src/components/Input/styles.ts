import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isField: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f3f3f3;
  border-radius: 10px;
  border: 3px solid #232129;
  padding: 16px;
  color: #333;
  width: 100%;

  position: relative;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    !props.isField &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocus &&
    css`
      color: #ffce00;
      border-color: #ffce00;
    `}

  ${props =>
    props.isField &&
    css`
      color: #ffce00;
    `}

  input {
    flex: 1;
    background: transparent;
    color: #333;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.p`
  color: #c53030;
  position: absolute;
  right: 16px;
`;
