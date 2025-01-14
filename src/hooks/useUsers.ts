import { useQuery } from '@tanstack/react-query';
import Api from '@/libs/api';

const api = new Api('users');

interface IUseUser {
  uuid?: string;
  search?: string;
}

const useUsers = ({ search }: IUseUser) => {
  const { data: users = [], isFetching } = useQuery<IUser[]>({
    queryKey: ['users', search],
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
