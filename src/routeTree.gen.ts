/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './routes/__root';

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')();
const UsersNewLazyImport = createFileRoute('/users_/new')();
const UsersUserIdLazyImport = createFileRoute('/users/$userId')();
const UsersUserIdEditLazyImport = createFileRoute('/users_/$userId/edit')();

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route));

const UsersNewLazyRoute = UsersNewLazyImport.update({
  id: '/users_/new',
  path: '/users/new',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/users_.new.lazy').then((d) => d.Route));

const UsersUserIdLazyRoute = UsersUserIdLazyImport.update({
  id: '/users/$userId',
  path: '/users/$userId',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/users.$userId.lazy').then((d) => d.Route)
);

const UsersUserIdEditLazyRoute = UsersUserIdEditLazyImport.update({
  id: '/users_/$userId/edit',
  path: '/users/$userId/edit',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/users_.$userId.edit.lazy').then((d) => d.Route)
);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/users/$userId': {
      id: '/users/$userId';
      path: '/users/$userId';
      fullPath: '/users/$userId';
      preLoaderRoute: typeof UsersUserIdLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/users_/new': {
      id: '/users_/new';
      path: '/users/new';
      fullPath: '/users/new';
      preLoaderRoute: typeof UsersNewLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/users_/$userId/edit': {
      id: '/users_/$userId/edit';
      path: '/users/$userId/edit';
      fullPath: '/users/$userId/edit';
      preLoaderRoute: typeof UsersUserIdEditLazyImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute;
  '/users/$userId': typeof UsersUserIdLazyRoute;
  '/users/new': typeof UsersNewLazyRoute;
  '/users/$userId/edit': typeof UsersUserIdEditLazyRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute;
  '/users/$userId': typeof UsersUserIdLazyRoute;
  '/users/new': typeof UsersNewLazyRoute;
  '/users/$userId/edit': typeof UsersUserIdEditLazyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexLazyRoute;
  '/users/$userId': typeof UsersUserIdLazyRoute;
  '/users_/new': typeof UsersNewLazyRoute;
  '/users_/$userId/edit': typeof UsersUserIdEditLazyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/users/$userId' | '/users/new' | '/users/$userId/edit';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/users/$userId' | '/users/new' | '/users/$userId/edit';
  id:
    | '__root__'
    | '/'
    | '/users/$userId'
    | '/users_/new'
    | '/users_/$userId/edit';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute;
  UsersUserIdLazyRoute: typeof UsersUserIdLazyRoute;
  UsersNewLazyRoute: typeof UsersNewLazyRoute;
  UsersUserIdEditLazyRoute: typeof UsersUserIdEditLazyRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  UsersUserIdLazyRoute: UsersUserIdLazyRoute,
  UsersNewLazyRoute: UsersNewLazyRoute,
  UsersUserIdEditLazyRoute: UsersUserIdEditLazyRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/users/$userId",
        "/users_/new",
        "/users_/$userId/edit"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/users/$userId": {
      "filePath": "users.$userId.lazy.tsx"
    },
    "/users_/new": {
      "filePath": "users_.new.lazy.tsx"
    },
    "/users_/$userId/edit": {
      "filePath": "users_.$userId.edit.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */