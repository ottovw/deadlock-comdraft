import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drafts/$draftId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /drafts/$draftId/!'
}
