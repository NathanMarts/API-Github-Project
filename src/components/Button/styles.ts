import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 56px;

  border-radius: 10px;
  background: #ffce00;
  border: 0;
  padding: 0 16px;
  color: #312e38;

  font-weight: 600;
  font-size: 20px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ffce00')};
  }
`;
