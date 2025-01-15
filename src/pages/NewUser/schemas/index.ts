import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(3),
  username: z
    .string()
    .min(5)
    .regex(/^\S*$/, 'Username must not contain spaces'),
  additional_info: z.string(),
  img: z.string().refine(
    (value) => {
      const base64Pattern =
        /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+)?;base64,[A-Za-z0-9+/]+={0,2}$/;
      return base64Pattern.test(value);
    },
    { message: 'Invalid file' }
  ),
});
