import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/users_/$userId/edit')({
  component: UserEdit,
});

function UserEdit() {
  return <div>Hello "/_/$userId/lazy/edit"!</div>;
}
