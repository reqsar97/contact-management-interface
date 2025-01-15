import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Api from '@/libs/api';
import { USER_QUERY_KEY } from '@/hooks/queries/useUser';

const api = new Api('users');

const useUpdateFavoriteMutation = (userId: string) => {
  const queryClient = useQueryClient();

  const { mutate: handleUpdateFavorite, isPending } = useMutation({
    mutationFn: async (values: boolean) => {
      return await api.patch<IUser, { isFavorite: boolean }>(userId, {
        isFavorite: values,
      });
    },
    onSuccess: (data) => {
      const text = data.isFavorite
        ? 'User added to favorites'
        : 'User removed from favorites';
      toast(text);
      queryClient.setQueryData<IUser>([USER_QUERY_KEY, userId], (oldData) => {
        if (!oldData) {
          return oldData;
        }
        return {
          ...oldData,
          isFavorite: data.isFavorite,
        };
      });
    },
    onError: () => {
      toast('Error updating favorite', {
        type: 'error',
      });
    },
  });

  return {
    handleUpdateFavorite,
    isPending,
  };
};

export default useUpdateFavoriteMutation;
