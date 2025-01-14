import { useQuery } from '@tanstack/react-query';
import Api from '@/libs/api';
import { USER_QUERY_KEY } from '@/hooks/queries/useUser/constants.ts';

const api = new Api('users');

interface IUseUser {
  userId: string;
}

const useUser = ({ userId }: IUseUser) => {
  const { data: user, isFetching } = useQuery<IUser>({
    queryKey: [USER_QUERY_KEY, userId],
    queryFn: async () => {
      const { data } = await api.read<IUser>(`/${userId}`);
      return data;
    },
    enabled: !!userId,
  });

  return { user, isFetching };
};

export default useUser;
