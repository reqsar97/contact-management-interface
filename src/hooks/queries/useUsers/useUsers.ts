import { useQuery } from '@tanstack/react-query';
import Api from '@/libs/api';
import { USERS_QUERY_KEY } from '@/hooks/queries/useUsers/constants.ts';

const api = new Api('users');

interface IUseUsers {
  search?: string;
}

const useUsers = ({ search }: IUseUsers) => {
  const { data: users = [], isFetching } = useQuery<IUser[]>({
    queryKey: [USERS_QUERY_KEY, search],
    queryFn: async () => {
      const { data } = await api.read<IUser[]>('');
      if (search) {
        return data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      return data;
    },
  });

  return { users, isFetching };
};

export default useUsers;
