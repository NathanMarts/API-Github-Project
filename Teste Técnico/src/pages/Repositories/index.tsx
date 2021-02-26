import React from 'react';
import { FiLock, FiStar, FiUnlock } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../hooks/Auth';

import { Container, Content, Header, ReposContainer, Wrapper } from './styles';

const Repositories: React.FC = () => {
  const { user, repos } = useAuth();

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Header>
          <h4>{user.public_repos} Repositórios</h4>
        </Header>
        <Content>
          {repos.map(repo => (
            <ReposContainer key={repo.id}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
              <div>
                <span>
                  <FiStar size={18} color="#ffce00" />
                  {repo.stargazers_count}
                </span>

                {repo.private ? (
                  <FiLock color="#c53030" />
                ) : (
                  <FiUnlock color="#53c530" />
                )}
              </div>
            </ReposContainer>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Repositories;
