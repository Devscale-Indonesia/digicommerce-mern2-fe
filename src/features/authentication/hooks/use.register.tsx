import React, { useState } from 'react';
import { registerSchemaValidation } from '../validation/auth.validation';
import { ZodIssue } from 'zod-validation-error';
import { registerUser } from '../services/api.register';

export const useRegister = () => {
  const [error, setError] = useState<string>('');
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const errors = registerSchemaValidation({ name, email, password });

    if (errors) {
      setLoading(false);
      return setErrors(errors);
    }

    setErrors([]);

    // Hit API
    // TODO : Implement Hit API
    const data = await registerUser({ name, email, password });

    if (!data) {
      setLoading(false);
      return setError('Something went wrong');
    }

    setLoading(false);
    setIsRegistered(true);
  }

  return { error, errors, loading, isRegistered, handleRegister };
};
