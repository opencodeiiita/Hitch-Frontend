'use client'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const QueryProvider = () => {
    return (
        <QueryClientProvider client={queryClient}>
        </QueryClientProvider>
    );
  };
  export default QueryProvider;