import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { ToastProvider } from '@/components/providers/toast-provider'
import { ModalProvider } from '@/components/providers/modal-provider'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code Reddit',
  description:
    'Explore the unique and creative programming community at Code Reddit - Where knowledge is shared, ideas are exchanged, and developers unite in harmony.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.png',
        href: '/logo.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo.png',
        href: '/logo.png',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider />
          <ModalProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
