import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/users_/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/users_/new"!</div>;
}
