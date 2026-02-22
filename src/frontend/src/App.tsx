import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import RecipeGallery from './pages/RecipeGallery';
import RecipeDetail from './pages/RecipeDetail';
import Layout from './components/Layout';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: RecipeGallery,
});

const recipeDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/recipe/$recipeName',
  component: RecipeDetail,
});

const routeTree = rootRoute.addChildren([indexRoute, recipeDetailRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
