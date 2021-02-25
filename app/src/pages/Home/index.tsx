import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import Avatar from '../../components/Avatar';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../hooks/Auth';

import {
  BioContainer,
  Container,
  Content,
  FollowContainer,
  Header,
  InfoContainer,
  Wrapper,
} from './styles';

const Home: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Header>
          <p>#{user.login}</p>
          <span onClick={() => signOut()}>
            Sair <FiLogOut size={18} />
          </span>
        </Header>
        <Content>
          <div className="avatar">
            <Avatar src={user.avatar_url} size={130} />
          </div>
          <InfoContainer>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.location}</p>
          </InfoContainer>
          <FollowContainer>
            <div>
              <h1>{user.followers}</h1>
              <p>Seguidores</p>
            </div>
            <div>
              <h1>{user.following}</h1>
              <p>Seguindo</p>
            </div>
            <div>
              <h1>{user.public_repos}</h1>
              <p>Repo</p>
            </div>
          </FollowContainer>
          <BioContainer>
            <h1>BIO</h1>
            <p>{user.bio}</p>
          </BioContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
