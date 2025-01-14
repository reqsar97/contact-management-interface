import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';

interface UserItemProps {
  name: string;
  id: string;
  active?: boolean;
}

const UserItem: FC<UserItemProps> = ({ name, active, id }) => {
  return (
    <Link
      to="/users/$userId"
      params={{
        userId: id,
      }}
      className={clsx('py-2 px-1 rounded', {
        'bg-blue-600 text-white': active,
      })}
    >
      {name}
    </Link>
  );
};

export default UserItem;
