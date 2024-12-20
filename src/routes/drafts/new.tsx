import { createFileRoute } from '@tanstack/react-router'
import { CreateDraftForm } from '../../components/drafts/create-draft-form'

export const Route = createFileRoute('/drafts/new')({
  component: CreateDraft,
})

function CreateDraft() {
  return (
    <div className="container mx-auto p-5">
      <CreateDraftForm />
    </div>
  )
}
