import { FC } from 'react';
import CardSkeleton from '@/components/CardSkeleton';
import Button from '@/components/Button';
import { Link } from '@tanstack/react-router';
import StarIcon from '@/icons/star.tsx';
import clsx from 'clsx';

interface UserCardProps {
  loading?: boolean;
  user?: IUser;
  onClickDelete: () => void;
  onClickFavorite: (value: boolean) => void;
}

const UserCard: FC<UserCardProps> = ({
  onClickFavorite,
  loading,
  user,
  onClickDelete,
}) => {
  if (loading) {
    return <CardSkeleton />;
  }

  if (!user) return null;

  return (
    <div className={'flex gap-6'}>
      <img
        className={'object-cover w-40  h-40'}
        src={user.img}
        alt={user.name}
      />
      <div className="">
        <h2 className={'font-bold text-2xl flex gap-2 items-center'}>
          {user.name}{' '}
          <StarIcon
            onClick={() => {
              onClickFavorite(!user.isFavorite);
            }}
            className={clsx('cursor-pointer hover:opacity-80', {
              'text-yellow-400': user.isFavorite,
              'text-gray-300': !user.isFavorite,
            })}
          />
        </h2>
        <h2 className={'font-bold text-xl text-blue-600'}>{user.username}</h2>
        <p className="mt-3">{user.additional_info}</p>
        <div className="flex gap-4 mt-3">
          <Link
            to={'/users/$userId/edit'}
            params={{
              userId: user.id,
            }}
          >
            <Button>Edit</Button>
          </Link>
          <Button
            onClick={() => {
              onClickDelete();
            }}
            disabled={loading}
            danger
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
