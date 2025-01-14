import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/users/$userId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useParams();

  return <div>Hello user {userId}</div>;
}
