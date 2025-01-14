import { createLazyFileRoute } from '@tanstack/react-router';
import UserOverview from '@/pages/UserOverview';

export const Route = createLazyFileRoute('/users/$userId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useParams();

  return <UserOverview userId={userId} />;
}
