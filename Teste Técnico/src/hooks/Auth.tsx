import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../service/api';

interface User {
  login: string;
  avatar_url: string;
  url: string;
  followers_url: string;
  following_url: string;
  starred_url: string;
  public_gists: string;
  organizations_url: string;
  repos_url: string;
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
  public_repos: 4;
  followers: 3;
  following: 1;
}

interface Respositories {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  private: boolean;
}

interface AuthState {
  user: User;
  follows: User[];
  following: User[];
  repos: Respositories[];
}

interface SingInCredentials {
  name: string;
}

interface AuthContextData {
  user: User;
  follows: User[];
  following: User[];
  repos: Respositories[];
  signIn(credentials: SingInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@GitApp:user');
    const follows = localStorage.getItem('@GitApp:follows');
    const following = localStorage.getItem('@GitApp:following');
    const repos = localStorage.getItem('@GitApp:repos');

    if (user && follows && following && repos) {
      return {
        user: JSON.parse(user),
        follows: JSON.parse(follows),
        following: JSON.parse(following),
        repos: JSON.parse(repos),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ name }) => {
      let response = await api.get(`https://api.github.com/users/${name}`);

      const user = response.data;

      response = await api.get(user.followers_url);

      const follows = response.data;

      response = await api.get(user.following_url.replace('{/other_user}', ''));

      const following = response.data;

      response = await api.get(user.repos_url);

      const repos = response.data;

      localStorage.setItem('@GitApp:user', JSON.stringify(user));
      localStorage.setItem('@GitApp:follows', JSON.stringify(follows));
      localStorage.setItem('@GitApp:following', JSON.stringify(following));
      localStorage.setItem('@GitApp:repos', JSON.stringify(repos));

      setData({ ...data, user, follows, following, repos });
    },
    [data],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@GitApp:user');
    localStorage.removeItem('@GitApp:follows');
    localStorage.removeItem('@GitApp:following');
    localStorage.removeItem('@GitApp:repos');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        follows: data.follows,
        following: data.following,
        repos: data.repos,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AUthProvider');
  }

  return context;
}
