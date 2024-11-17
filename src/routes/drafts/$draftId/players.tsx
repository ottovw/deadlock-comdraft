import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drafts/$draftId/players')({
    component: RouteComponent,
})

function RouteComponent() {
    return 'Hello /drafts/$draftId/players!'
}
