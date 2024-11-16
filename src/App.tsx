import './index.css'
import { useState, useEffect } from 'react'
import { createClient, Session } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLIC_API_KEY)

const redirectUrl = window.location.origin + import.meta.env.BASE_URL;

export default function App() {

  console.log(import.meta.env)

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
      <button onClick={() => {
        supabase.auth.signInWithOAuth({
          provider: 'discord',
          options: {
            redirectTo: redirectUrl,
          },
        })
      }}>Test</button>
    )
  }
  else {
    return (<div>Logged in!</div>)
  }
}