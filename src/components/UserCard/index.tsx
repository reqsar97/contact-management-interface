import { FC } from 'react';
import CardSkeleton from '@/components/CardSkeleton';
import Button from '@/components/Button';

interface UserCardProps {
  loading?: boolean;
  user?: IUser;
}

const UserCard: FC<UserCardProps> = ({ loading, user }) => {
  if (loading) {
    return <CardSkeleton />;
  }

  return (
    <div className={'flex gap-6'}>
      <img className={'w-40 h-40'} src={user?.img} alt={user?.name} />
      <div className="">
        <h2 className={'font-bold text-2xl '}>{user?.name}</h2>
        <h2 className={'font-bold text-xl text-blue-600'}>{user?.username}</h2>
        <p className="mt-3">{user?.additional_info}</p>
        <div className="flex gap-4 mt-3">
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
