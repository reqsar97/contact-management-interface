import { FC } from 'react';
import { useUser } from '@/hooks/queries/useUser';
import UserCard from '@/components/UserCard';

interface UserOverviewProps {
  userId: string;
}

const UserOverview: FC<UserOverviewProps> = ({ userId }) => {
  const { user, isFetching } = useUser({ userId });

  return (
    <div className="pt-8 pl-12">
      <UserCard user={user} loading={isFetching} />
    </div>
  );
};

export default UserOverview;
