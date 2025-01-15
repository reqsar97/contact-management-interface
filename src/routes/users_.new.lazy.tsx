import { createLazyFileRoute } from '@tanstack/react-router';
import NewUser from '@/pages/NewUser';

export const Route = createLazyFileRoute('/users_/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return <NewUser />;
}
