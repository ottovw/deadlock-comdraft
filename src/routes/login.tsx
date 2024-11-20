import { createFileRoute, redirect } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { login, supabaseClient } from '../supabase'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useSearch() as unknown as { access_token: string, refresh_token: string }

  console.log("accessToken", params)

  if (params.access_token && params.refresh_token) {
    supabaseClient.auth.setSession({ access_token: params.access_token, refresh_token: params.refresh_token })
    redirect({ to: '/' });
  }


  return <div>
    <Button onClick={() => login()}>Login</Button>
  </div>
}
