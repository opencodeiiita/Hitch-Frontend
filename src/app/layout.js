'use client'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '@/contexts/AuthContext';

const queryClient = new QueryClient();

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Hitch',
//   description: 'Elevating Collaboration Beyond Boundaries',
// }

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </AuthProvider>
    </QueryClientProvider>
  )
}
