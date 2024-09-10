import React, { useState } from 'react';
import { loginSchemaValidation } from '../validation/auth.validation';
import { ZodIssue } from 'zod-validation-error';
import { loginUser } from '../services/api.login';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSetAtom } from 'jotai';
import { userAtom } from '../../../lib/auth';

export const useLogin = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>('');
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [loading, setLoading] = useState(false);

  const setUser = useSetAtom(userAtom);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const errors = loginSchemaValidation({ email, password });

    if (errors) {
      setLoading(false);
      return setErrors(errors);
    }

    setErrors([]);

    // Hit API
    // TODO : Implement Hit API
    const data = await loginUser({ email, password });

    if (!data.token) {
      setLoading(false);
      return setError('Something went wrong');
    }

    setUser(data.record);
    localStorage.setItem('user', JSON.stringify(data.record));
    Cookies.set('token', data.token);
    // Push to dashboard
    navigate('/dashboard');
  }

  return { error, errors, loading, handleLogin };
};
