import { createLazyFileRoute } from '@tanstack/react-router';
import NewUser from '@/pages/NewUser';

export const Route = createLazyFileRoute('/users_/$userId/edit')({
  component: UserEdit,
});

function UserEdit() {
  const { userId } = Route.useParams();
  return <NewUser userId={userId} />;
}
