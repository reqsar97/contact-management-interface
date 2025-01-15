import { FC, useState } from 'react';
import { useUser } from '@/hooks/queries/useUser';
import UserCard from '@/components/UserCard';
interface UserOverviewProps {
  userId: string;
}
import Dialog from '@/components/Dialog';
import useDeleteUserMutation from '@/hooks/mutations/useDeleteUserMutation/useDeleteUserMutation.ts';
import { useUpdateFavoriteMutation } from '@/hooks/mutations/useUpdateFavoriteMutation';

const UserOverview: FC<UserOverviewProps> = ({ userId }) => {
  const { user, isFetching, isError } = useUser({ userId });
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const { handleDeleteUser, isPending } = useDeleteUserMutation();
  const { handleUpdateFavorite } = useUpdateFavoriteMutation(userId);

  return (
    <>
      <Dialog
        isOpen={isOpenDeleteDialog}
        onClose={() => {
          setIsOpenDeleteDialog(false);
        }}
        onConfirm={() => {
          handleDeleteUser(userId);
        }}
        title={'Confirm Deletion'}
        description={
          'Are you sure you want to delete this item? This action cannot be undone.'
        }
        loading={isPending}
      />
      {isError && (
        <div className={''}>
          <h3>User not found</h3>
        </div>
      )}
      <UserCard
        onClickDelete={() => {
          setIsOpenDeleteDialog(true);
        }}
        onClickFavorite={handleUpdateFavorite}
        user={user}
        loading={isFetching}
      />
    </>
  );
};

export default UserOverview;
