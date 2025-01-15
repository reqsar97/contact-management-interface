import { z } from 'zod';

export const nameValidator = z
  .string({
    required_error: 'First Name is required',
    invalid_type_error: 'First Name must be a string',
  })
  .trim()
  .regex(/^[A-Za-z\s]+$/, 'First Name must contain only alphabets');

export const usernameValidator = z
  .string()
  .min(5, 'Username must be at least 5 characters long')
  .regex(/^\S+$/, 'Username cannot contain spaces');

export const optionalStringValidator = z.string().optional();

export const emailValidator = z.string().email('Invalid email address');
