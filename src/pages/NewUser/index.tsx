import { FC } from 'react';
import { useForm } from '@tanstack/react-form';
import Button from '@/components/Button';
import Input from '@/components/Input';
import useCreateUpdateUserMutation from '@/hooks/mutations/useCreateUpdateUserMutation/useCreateUpdateUserMutation.ts';
import { z } from 'zod';
import { useFileHandler } from '@/hooks/common/useFileHandler.ts';
import FieldInfo from '@/components/FieldInfo';
import { userFormOptions } from '@/pages/NewUser/forms/userForm.ts';
import { nameValidator } from '@/utils/validators/stringValidators.ts';
import { useUser } from '@/hooks/queries/useUser';

const NewUser: FC<{ userId?: string }> = ({ userId }) => {
  const { user } = useUser({ userId });
  const { handleCreateUser } = useCreateUpdateUserMutation(userId);
  const form = useForm({
    ...userFormOptions,
    onSubmit: async ({ value }) => {
      handleCreateUser(value);
    },
    defaultValues: {
      name: user?.name ?? '',
      username: user?.username ?? '',
      additional_info: user?.additional_info ?? '',
      img: user?.img ?? '',
    },
  });

  const { handleFileChange } = useFileHandler();

  return (
    <div>
      <form
        className={'flex flex-col gap-4'}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="name"
            validators={{
              onBlur: nameValidator,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes('error');
              }),
            }}
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Name*:</label>
                  <Input
                    placeholder="Name"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo fieldMeta={field.state.meta} />
                </>
              );
            }}
          />
        </div>
        <div>
          <form.Field
            name="username"
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Username*:</label>
                  <Input
                    placeholder="Username"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo fieldMeta={field.state.meta} />
                </>
              );
            }}
          />
        </div>
        <div>
          <form.Field
            name="additional_info"
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Additional info:</label>
                  <Input
                    placeholder="Additional info"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo fieldMeta={field.state.meta} />
                </>
              );
            }}
          />
        </div>
        <div className={'flex gap-4'}>
          <form.Subscribe
            selector={(state) => [state.values.img]}
            children={([img]) => (
              <>
                {img && (
                  <img
                    className={'object-cover w-40  h-40'}
                    src={img}
                    alt={'uploaded-image'}
                  />
                )}
              </>
            )}
          />
          <form.Field
            name="img"
            children={(field) => {
              return (
                <div className={'flex flex-col'}>
                  <label htmlFor={field.name}>Image*:</label>
                  <input
                    type="file"
                    id={field.name}
                    name={field.name}
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleFileChange(field, file);
                      }
                    }}
                  />
                  <FieldInfo fieldMeta={field.state.meta} />
                </div>
              );
            }}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Submit'}
            </Button>
          )}
        />
      </form>
    </div>
  );
};

export default NewUser;
