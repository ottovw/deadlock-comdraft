import { createFileRoute, redirect } from '@tanstack/react-router'
import SupabaseLogin, { supabase } from '../supabase.client'

export const Route = createFileRoute('/login')({
  component: RouteComponent,

})

function RouteComponent() {
  const params = Route.useSearch()

  console.log("accessToken", params)

  if (params.access_token && params.refresh_token) {
    supabase.auth.setSession({ access_token: params.access_token, refresh_token: params.refresh_token })
    redirect({ to: '/' });
  }


  return <SupabaseLogin />
}
