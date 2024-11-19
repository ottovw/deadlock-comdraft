import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/drafts/$draftId/_draft-container')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div>
      <Outlet />
    </div >
  )
}
