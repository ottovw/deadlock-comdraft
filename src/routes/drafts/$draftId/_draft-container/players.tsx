import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/drafts/$draftId/_draft-container/players',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return 'PLAYERS'
}
