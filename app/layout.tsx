import './globals.css'

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
        <main className='min-h-screen flex flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
