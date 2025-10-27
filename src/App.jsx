import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './router';
import ThemeToggle from './components/ThemeToggle';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeToggle />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
