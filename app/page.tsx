import { ThemeToggle } from '@/components/ThemeToggle'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { Home } from '@/components/Home'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className='flex-1 w-full flex flex-col gap-8 items-center'>
      <nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
        <div className='w-full max-w-4xl flex justify-between items-center p-3 text-sm'>
          <h1>Data Set Generator</h1>
          {isSupabaseConnected && <AuthButton />}
          <ThemeToggle />
        </div>
      </nav>

      <Home />

      <footer className='w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs'>
        <p>Built with love in Lehi, Utah ❤️</p>
      </footer>
    </div>
  )
}
