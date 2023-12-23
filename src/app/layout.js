import { Inter } from 'next/font/google'
import '../styles/globals.css'
import MuiThemeProvider from "@/providers/muiThemeProvider";
import QueryProvider from '@/providers/queryProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hitch',
  description: 'Elevating Collaboration Beyond Boundaries',
}

export default function RootLayout({ children }) {
  return (
        <html lang="en">
          <body className={inter.className}>
          <QueryProvider>
                <MuiThemeProvider>{children}</MuiThemeProvider>
            </QueryProvider>
          </body>
        </html>
  )
}
