import { ChangeEvent, FC } from 'react';
import Input from '@/components/Input';
import useUsers from '@/hooks/useUsers';
import {
  Link,
  useNavigate,
  useParams,
  useSearch,
} from '@tanstack/react-router';
import useDebounce from '@/hooks/useDebounce';
import Button from '@/components/Button';
import UserItem from '@/components/Layout/UserItem';

const Layout: FC = () => {
  const { search = '' } = useSearch({
    strict: false,
  });
  const activeUser = useParams({
    strict: false,
    select: (params) => params.userId,
  });
  const navigate = useNavigate({
    from: '/',
  });

  const { users } = useUsers({
    search,
  });

  const handleChangeSearch = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    void navigate({
      search: () => ({
        search: value,
      }),
    });
  }, 500);

  return (
    <div className="bg-slate-200 h-screen">
      <div className="flex gap-2 p-4 mb-4 border-b border-slate-300">
        <Input
          onChange={handleChangeSearch}
          defaultValue={search}
          isSearch
          className="flex-1"
          placeholder="Search"
        />
        <Link to={'/users/new'}>
          <Button>New</Button>
        </Link>
      </div>
      <div className={'px-4 flex flex-col'}>
        {users.map((user) => {
          return (
            <UserItem
              key={user.uuid}
              active={user.uuid === activeUser}
              uuid={user.uuid}
              name={user.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
