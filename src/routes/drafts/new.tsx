import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drafts/new')({
  component: CreateDraft,
})

function CreateDraft() {
  return (
    <div className="p-2">
      <h1>Create Draft</h1>
      <p>Here you can create a new draft.</p>
    </div>
  )
}
