import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata = {
  title: 'Fine-tuning dataset',
  description: 'The fastest way to create data for a fine-tuning project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-background text-foreground'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='min-h-screen flex flex-col items-center'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
