import { useSnackbarContext } from '#common/components';
import { linkRoutes } from '#core/router';
import axios, { AxiosError } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const useApiConfig = () => {
  const navigate = useNavigate();

  const { showMessage } = useSnackbarContext();

  React.useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response.status === 401) {
          showMessage('You should login', 'error');
          navigate(linkRoutes.login);
        }
      }
    );
  }, []);
};
