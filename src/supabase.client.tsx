import './index.css'
import { useState, useEffect } from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import { Button } from './components/ui/button';

export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLIC_API_KEY)

const redirectUrl = window.location.origin + import.meta.env.BASE_URL + '#/login?';

export default function SupabaseLogin() {

  console.log(import.meta.env, redirectUrl)

  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <Button onClick={() => {
        supabase.auth.signInWithOAuth({
          provider: 'discord',
          options: {
            redirectTo: redirectUrl,
          },
        })
      }}>Login</Button>
    )
  }
  else {
    return (<div>Logged in!</div>)
  }
}