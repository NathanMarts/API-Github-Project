import styled, { css } from 'styled-components';

export const Container = styled.div<{ size?: number }>`
  ${({ size }) =>
    size
      ? css`
          width: ${size}px;
          height: ${size}px;
        `
      : css`
          width: 36px;
          height: 36px;
        `}

  border-radius: 50%;
  border: 3px solid #fff;

  overflow: hidden;

  img {
    ${({ size }) =>
      size
        ? css`
            width: ${size}px;
            height: ${size}px;
          `
        : css`
            width: 36px;
            height: 36px;
          `}
    object-fit: cover;
  }
`;
