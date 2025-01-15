import { formOptions } from '@tanstack/react-form';
import { userSchema } from '@/pages/NewUser/schemas';

export const userFormOptions = formOptions({
  validators: {
    onBlur: userSchema,
  },
});
