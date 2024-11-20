import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { createClient, Session } from '@supabase/supabase-js'

export const supabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLIC_API_KEY)

export interface SessionContextProps {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

export const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export const SupabaseSessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};



export function login() {
  const redirectUrl = window.location.origin + import.meta.env.BASE_URL + '#/login?';
  supabaseClient.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: redirectUrl,
    },
  })
}

export function logout() {
  supabaseClient.auth.signOut();
}

export default supabaseClient;