import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '@/libs/api';
import { USERS_QUERY_KEY } from '@/hooks/queries/useUsers';
import { USER_QUERY_KEY } from '@/hooks/queries/useUser';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'react-toastify';

const api = new Api('users');
const useDeleteUserMutation = () => {
  const navigate = useNavigate({});
  const queryClient = useQueryClient();

  const { mutate: handleDeleteUser, isPending } = useMutation({
    mutationFn: async (userId: string) => api.delete<void>(`${userId}`),
    onSuccess: () => {
      toast('User deleted successfully');
      // Invalidate and refetch
      void queryClient.invalidateQueries({
        queryKey: [USERS_QUERY_KEY],
      });
      void queryClient.invalidateQueries({
        queryKey: [USER_QUERY_KEY],
      });
      void navigate({
        to: '/',
      });
    },
    onError: () => {
      toast('Error deleting user', {
        type: 'error',
      });
    },
  });

  return {
    handleDeleteUser,
    isPending,
  };
};

export default useDeleteUserMutation;
