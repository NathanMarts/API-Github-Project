import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Container } from './styles';

const Navbar: React.FC = () => {
  const url = useLocation();
  const history = useHistory();

  return (
    <Container>
      <ul>
        <li
          onClick={() => {
            history.push('/home');
          }}
          className={url.pathname.search('/home') !== -1 ? 'selected' : ''}
        >
          Início
        </li>
        <li
          onClick={() => {
            history.push('/repos');
          }}
          className={url.pathname.search('/repos') !== -1 ? 'selected' : ''}
        >
          Repositórios
        </li>
        <li
          onClick={() => {
            history.push('/followers');
          }}
          className={url.pathname.search('/followers') !== -1 ? 'selected' : ''}
        >
          Seguidores
        </li>
        <li
          onClick={() => {
            history.push('/following');
          }}
          className={url.pathname.search('/following') !== -1 ? 'selected' : ''}
        >
          Seguindo
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
