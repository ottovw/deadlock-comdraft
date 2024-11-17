import { createFileRoute } from '@tanstack/react-router'
import SupabaseLogin from '../supabase.client'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SupabaseLogin />
}
