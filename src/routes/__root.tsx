import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Layout from '@/components/Layout';

type UsersSearch = {
  search?: string;
};

export const Route = createRootRoute({
  component: RootComponent,
  validateSearch: (search: Record<string, unknown>): UsersSearch => {
    // validate and parse the search params into a typed state
    return {
      search: (search.search as string) || '',
    };
  },
});

function RootComponent() {
  return (
    <div className={'flex'}>
      <div className={'basis-2/6'}>
        <Layout />
      </div>
      <div className={'basis-4/6 py-8 px-12'}>
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  );
}
