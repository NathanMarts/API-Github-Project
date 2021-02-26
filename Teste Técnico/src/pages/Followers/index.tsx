import React, { useCallback, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { User } from '../../@types/types';
import Avatar from '../../components/Avatar';
import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';
import { useAuth } from '../../hooks/Auth';
import api from '../../service/api';

import { Container, Content, FollowContainer, Header, Wrapper } from './styles';

const Followers: React.FC = () => {
  const { user, follows } = useAuth();
  const [changeUser, setchangeUser] = useState<User>({} as User);

  const handleProfileUser = useCallback(async (url: string) => {
    const res = await api.get(url);

    setchangeUser(res.data);
  }, []);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        {!!changeUser.login ? (
          <Profile user={changeUser} />
        ) : (
          <>
            <Header>
              <h4>{user.followers} Seguidores</h4>
            </Header>
            <Content>
              {follows.map(follow => (
                <FollowContainer
                  key={follow.login}
                  onClick={() => handleProfileUser(follow.url)}
                >
                  <Avatar src={follow.avatar_url} size={55} />
                  <h4>#{follow.login}</h4>
                  <FiArrowRight size={24} />
                </FollowContainer>
              ))}
            </Content>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Followers;
