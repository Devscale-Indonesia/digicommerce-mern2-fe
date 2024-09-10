import z from 'zod';
import { fromError } from 'zod-validation-error';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type TRegister = z.infer<typeof registerSchema>;
export type TLogin = z.infer<typeof loginSchema>;

export function registerSchemaValidation({ name, email, password }: TRegister) {
  try {
    registerSchema.parse({ name, email, password });
  } catch (error) {
    const validationErr = fromError(error);
    console.log(validationErr.details);
    return validationErr.details;
  }
}

export function loginSchemaValidation({ email, password }: TLogin) {
  try {
    loginSchema.parse({ email, password });
  } catch (error) {
    const validationErr = fromError(error);
    console.log(validationErr.details);
    return validationErr.details;
  }
}
