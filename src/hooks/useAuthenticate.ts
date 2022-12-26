import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { AuthenticationType } from 'types/user';
import { getProfile } from 'services/user';

export const useAuthenticate = (): AuthenticationType => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token'),
  );
  const { data } = useQuery(['getProfile', token], getProfile, {
    enabled: !!token,
  });

  useEffect(() => {
    const tokenParam = queryParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
      localStorage.setItem('token', tokenParam);
    }
  }, [search]);

  const user = data?.data?.results;
  return {
    token,
    user,
    isLoggedIn: !!user,
  };
};
