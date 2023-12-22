'use client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '@/contexts/AuthContext';
const queryClient = new QueryClient();

const QueryProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                { children }
            </AuthProvider>
        </QueryClientProvider>
    );
  };
  export default QueryProvider;