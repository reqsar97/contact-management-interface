import { useNavigate } from '@tanstack/react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { USERS_QUERY_KEY } from '@/hooks/queries/useUsers';
import Api from '@/libs/api';
import { USER_QUERY_KEY } from '@/hooks/queries/useUser';

const api = new Api('users');

const useCreateUpdateUserMutation = (userId?: string) => {
  const navigate = useNavigate({});
  const queryClient = useQueryClient();

  const { mutate: handleCreateUser, isPending } = useMutation({
    mutationFn: async (values: IUserCreate) => {
      if (userId) {
        return await api.update<IUser, IUserCreate>(userId, values);
      } else {
        return await api.create<IUser, IUserCreate>('', values);
      }
    },
    onSuccess: (data) => {
      let text = 'User created successfully';
      if (userId) {
        text = 'User updated successfully';
      }
      toast(text);
      // Invalidate and refetch
      void queryClient.invalidateQueries({
        queryKey: [USERS_QUERY_KEY],
      });
      if (userId) {
        void queryClient.invalidateQueries({
          queryKey: [USER_QUERY_KEY],
        });
      }
      void navigate({
        to: '/users/$userId',
        params: {
          userId: data.id,
        },
      });
    },
    onError: () => {
      toast('Error creating user', {
        type: 'error',
      });
    },
  });

  return {
    handleCreateUser,
    isPending,
  };
};

export default useCreateUpdateUserMutation;
