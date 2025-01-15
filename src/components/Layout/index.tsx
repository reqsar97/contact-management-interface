import { ChangeEvent, FC } from 'react';
import Input from '@/components/Input';
import { useUsers } from '@/hooks/queries/useUsers';
import {
  Link,
  useNavigate,
  useParams,
  useSearch,
} from '@tanstack/react-router';
import useDebounce from '@/hooks/common/useDebounce.ts';
import Button from '@/components/Button';
import UserItem from '@/components/Layout/UserItem';
import { ToastContainer } from 'react-toastify';

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
      <div
        className={'px-4 flex flex-col max-h-sidebar-content overflow-y-scroll'}
      >
        {users.map((user) => {
          return (
            <UserItem
              key={user.id}
              active={user.id === activeUser}
              id={user.id}
              name={user.name}
            />
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Layout;
