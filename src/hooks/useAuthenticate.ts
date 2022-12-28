import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { AuthenticationType } from 'types/user';
import { getProfile } from 'services/user';

export default (): AuthenticationType => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token'),
  );
  const { data, isSuccess } = useQuery(['getProfile', token], getProfile, {
    enabled: !!token,
  });

  useEffect(() => {
    const tokenParam = queryParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
      localStorage.setItem('token', tokenParam);
    }
  }, [search]);

  useEffect(() => {
    if (isSuccess) {
      navigate(window.location.pathname);
    }
  }, [isSuccess]);

  const user = data?.data?.results;
  return {
    token,
    user,
    isLoggedIn: !!user,
  };
};
