import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className={'flex'}>
      <div className={'flex-1'}>
        <div>Layout</div>
      </div>
      <div className={'flex-1'}>
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  );
}
