import { createBrowserRouter } from 'react-router-dom';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Profile from './features/profile/pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Posts from './features/blog/pages/Posts';          
import PostDetail from './features/blog/pages/PostDetail'; 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />,  
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/blog/posts',          // Ruta para listado de libros
    element: <Posts />,
  },
  {
    path: '/blog/posts/:id',      // Ruta para detalle de libro
    element: <PostDetail />,
  },
]);

export default router;
