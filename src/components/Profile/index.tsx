import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { User } from '../../@types/types';
import { useAuth } from '../../hooks/Auth';
import Avatar from '../Avatar';

import {
  BioContainer,
  Container,
  FollowContainer,
  Header,
  InfoContainer,
} from './styles';

const Profile: React.FC<{ user: User }> = ({ user }) => {
  const { signIn } = useAuth();
  const history = useHistory();

  return (
    <>
      <Header>
        <p>#{user.login}</p>
        <span
          onClick={async () => {
            await signIn({ name: user.login });
            history.push('/home');
          }}
        >
          Salvar <FiLogIn size={18} />
        </span>
      </Header>
      <Container>
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
      </Container>
    </>
  );
};

export default Profile;
