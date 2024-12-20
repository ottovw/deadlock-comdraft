/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as DraftsNewImport } from './routes/drafts/new'
import { Route as DraftsDraftIdDraftContainerImport } from './routes/drafts/$draftId/_draft-container'
import { Route as DraftsDraftIdDraftContainerIndexImport } from './routes/drafts/$draftId/_draft-container/index'
import { Route as DraftsDraftIdDraftContainerPlayersImport } from './routes/drafts/$draftId/_draft-container/players'
import { Route as DraftsDraftIdDraftContainerJoinImport } from './routes/drafts/$draftId/_draft-container/join'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const DraftsDraftIdImport = createFileRoute('/drafts/$draftId')()

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const DraftsDraftIdRoute = DraftsDraftIdImport.update({
  id: '/drafts/$draftId',
  path: '/drafts/$draftId',
  getParentRoute: () => rootRoute,
} as any)

const DraftsNewRoute = DraftsNewImport.update({
  id: '/drafts/new',
  path: '/drafts/new',
  getParentRoute: () => rootRoute,
} as any)

const DraftsDraftIdDraftContainerRoute =
  DraftsDraftIdDraftContainerImport.update({
    id: '/_draft-container',
    getParentRoute: () => DraftsDraftIdRoute,
  } as any)

const DraftsDraftIdDraftContainerIndexRoute =
  DraftsDraftIdDraftContainerIndexImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => DraftsDraftIdDraftContainerRoute,
  } as any)

const DraftsDraftIdDraftContainerPlayersRoute =
  DraftsDraftIdDraftContainerPlayersImport.update({
    id: '/players',
    path: '/players',
    getParentRoute: () => DraftsDraftIdDraftContainerRoute,
  } as any)

const DraftsDraftIdDraftContainerJoinRoute =
  DraftsDraftIdDraftContainerJoinImport.update({
    id: '/join',
    path: '/join',
    getParentRoute: () => DraftsDraftIdDraftContainerRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/drafts/new': {
      id: '/drafts/new'
      path: '/drafts/new'
      fullPath: '/drafts/new'
      preLoaderRoute: typeof DraftsNewImport
      parentRoute: typeof rootRoute
    }
    '/drafts/$draftId': {
      id: '/drafts/$draftId'
      path: '/drafts/$draftId'
      fullPath: '/drafts/$draftId'
      preLoaderRoute: typeof DraftsDraftIdImport
      parentRoute: typeof rootRoute
    }
    '/drafts/$draftId/_draft-container': {
      id: '/drafts/$draftId/_draft-container'
      path: '/drafts/$draftId'
      fullPath: '/drafts/$draftId'
      preLoaderRoute: typeof DraftsDraftIdDraftContainerImport
      parentRoute: typeof DraftsDraftIdRoute
    }
    '/drafts/$draftId/_draft-container/join': {
      id: '/drafts/$draftId/_draft-container/join'
      path: '/join'
      fullPath: '/drafts/$draftId/join'
      preLoaderRoute: typeof DraftsDraftIdDraftContainerJoinImport
      parentRoute: typeof DraftsDraftIdDraftContainerImport
    }
    '/drafts/$draftId/_draft-container/players': {
      id: '/drafts/$draftId/_draft-container/players'
      path: '/players'
      fullPath: '/drafts/$draftId/players'
      preLoaderRoute: typeof DraftsDraftIdDraftContainerPlayersImport
      parentRoute: typeof DraftsDraftIdDraftContainerImport
    }
    '/drafts/$draftId/_draft-container/': {
      id: '/drafts/$draftId/_draft-container/'
      path: '/'
      fullPath: '/drafts/$draftId/'
      preLoaderRoute: typeof DraftsDraftIdDraftContainerIndexImport
      parentRoute: typeof DraftsDraftIdDraftContainerImport
    }
  }
}

// Create and export the route tree

interface DraftsDraftIdDraftContainerRouteChildren {
  DraftsDraftIdDraftContainerJoinRoute: typeof DraftsDraftIdDraftContainerJoinRoute
  DraftsDraftIdDraftContainerPlayersRoute: typeof DraftsDraftIdDraftContainerPlayersRoute
  DraftsDraftIdDraftContainerIndexRoute: typeof DraftsDraftIdDraftContainerIndexRoute
}

const DraftsDraftIdDraftContainerRouteChildren: DraftsDraftIdDraftContainerRouteChildren =
  {
    DraftsDraftIdDraftContainerJoinRoute: DraftsDraftIdDraftContainerJoinRoute,
    DraftsDraftIdDraftContainerPlayersRoute:
      DraftsDraftIdDraftContainerPlayersRoute,
    DraftsDraftIdDraftContainerIndexRoute:
      DraftsDraftIdDraftContainerIndexRoute,
  }

const DraftsDraftIdDraftContainerRouteWithChildren =
  DraftsDraftIdDraftContainerRoute._addFileChildren(
    DraftsDraftIdDraftContainerRouteChildren,
  )

interface DraftsDraftIdRouteChildren {
  DraftsDraftIdDraftContainerRoute: typeof DraftsDraftIdDraftContainerRouteWithChildren
}

const DraftsDraftIdRouteChildren: DraftsDraftIdRouteChildren = {
  DraftsDraftIdDraftContainerRoute:
    DraftsDraftIdDraftContainerRouteWithChildren,
}

const DraftsDraftIdRouteWithChildren = DraftsDraftIdRoute._addFileChildren(
  DraftsDraftIdRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginRoute
  '/drafts/new': typeof DraftsNewRoute
  '/drafts/$draftId': typeof DraftsDraftIdDraftContainerRouteWithChildren
  '/drafts/$draftId/join': typeof DraftsDraftIdDraftContainerJoinRoute
  '/drafts/$draftId/players': typeof DraftsDraftIdDraftContainerPlayersRoute
  '/drafts/$draftId/': typeof DraftsDraftIdDraftContainerIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginRoute
  '/drafts/new': typeof DraftsNewRoute
  '/drafts/$draftId': typeof DraftsDraftIdDraftContainerIndexRoute
  '/drafts/$draftId/join': typeof DraftsDraftIdDraftContainerJoinRoute
  '/drafts/$draftId/players': typeof DraftsDraftIdDraftContainerPlayersRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginRoute
  '/drafts/new': typeof DraftsNewRoute
  '/drafts/$draftId': typeof DraftsDraftIdRouteWithChildren
  '/drafts/$draftId/_draft-container': typeof DraftsDraftIdDraftContainerRouteWithChildren
  '/drafts/$draftId/_draft-container/join': typeof DraftsDraftIdDraftContainerJoinRoute
  '/drafts/$draftId/_draft-container/players': typeof DraftsDraftIdDraftContainerPlayersRoute
  '/drafts/$draftId/_draft-container/': typeof DraftsDraftIdDraftContainerIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/drafts/new'
    | '/drafts/$draftId'
    | '/drafts/$draftId/join'
    | '/drafts/$draftId/players'
    | '/drafts/$draftId/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/drafts/new'
    | '/drafts/$draftId'
    | '/drafts/$draftId/join'
    | '/drafts/$draftId/players'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/drafts/new'
    | '/drafts/$draftId'
    | '/drafts/$draftId/_draft-container'
    | '/drafts/$draftId/_draft-container/join'
    | '/drafts/$draftId/_draft-container/players'
    | '/drafts/$draftId/_draft-container/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginRoute: typeof LoginRoute
  DraftsNewRoute: typeof DraftsNewRoute
  DraftsDraftIdRoute: typeof DraftsDraftIdRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginRoute: LoginRoute,
  DraftsNewRoute: DraftsNewRoute,
  DraftsDraftIdRoute: DraftsDraftIdRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/drafts/new",
        "/drafts/$draftId"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/drafts/new": {
      "filePath": "drafts/new.tsx"
    },
    "/drafts/$draftId": {
      "filePath": "drafts/$draftId",
      "children": [
        "/drafts/$draftId/_draft-container"
      ]
    },
    "/drafts/$draftId/_draft-container": {
      "filePath": "drafts/$draftId/_draft-container.tsx",
      "parent": "/drafts/$draftId",
      "children": [
        "/drafts/$draftId/_draft-container/join",
        "/drafts/$draftId/_draft-container/players",
        "/drafts/$draftId/_draft-container/"
      ]
    },
    "/drafts/$draftId/_draft-container/join": {
      "filePath": "drafts/$draftId/_draft-container/join.tsx",
      "parent": "/drafts/$draftId/_draft-container"
    },
    "/drafts/$draftId/_draft-container/players": {
      "filePath": "drafts/$draftId/_draft-container/players.tsx",
      "parent": "/drafts/$draftId/_draft-container"
    },
    "/drafts/$draftId/_draft-container/": {
      "filePath": "drafts/$draftId/_draft-container/index.tsx",
      "parent": "/drafts/$draftId/_draft-container"
    }
  }
}
ROUTE_MANIFEST_END */
