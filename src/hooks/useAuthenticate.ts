import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AuthenticationType, UserType } from 'types/user';
import { getProfile } from 'services/user';
import { logout } from 'services/auth';

export default (): AuthenticationType => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);

  const [user, setUser] = useState<UserType | undefined>(undefined);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token'),
  );
  const { data, isSuccess } = useQuery(['getProfile', token], getProfile, {
    enabled: !!token,
  });
  useEffect(() => {
    setUser(data?.data?.results);
  }, [data, isSuccess]);

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem('token');
      setUser(undefined);
    },
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

  return {
    token,
    user,
    isLoggedIn: !!user,
    handleLogout: logoutMutation.mutate,
  };
};
