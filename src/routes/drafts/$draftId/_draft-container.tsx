import { createFileRoute, Link, Outlet, RouteApi } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/drafts/$draftId/_draft-container')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const [foo] = useState(new Date().toISOString())
  const { draftId } = Route.useParams()

  return (
    <div>
      <h1>Layout</h1>
      <p>{foo}</p>
      <Link to={`/drafts/${draftId}`}>
        Index
      </Link>
      <Link
        to={`/drafts/${draftId}/players`}>
        Players
      </Link>
      <Outlet />
    </div >
  )
}
