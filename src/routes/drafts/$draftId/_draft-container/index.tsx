import { createFileRoute, Link } from '@tanstack/react-router'
import { DraftLayout } from '../../../../components/drafts/draft-layout'
import { Button } from '../../../../components/ui/button'
import supabaseClient from '../../../../supabase'

export const Route = createFileRoute('/drafts/$draftId/_draft-container/')({
  component: RouteComponent,
  loader: async ({ params: { draftId } }) => {
    console.log(draftId)
    const response = await supabaseClient
      .from('drafts')
      .select()
      .eq('id', draftId)
      .single()
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data
  },
})

function RouteComponent() {
  const draft = Route.useLoaderData()

  return (
    <div className="container mx-auto p-5 flex flex-col gap-5">
      <div className="flex flex-row items-center">
        Draft id {draft.id}
        <h1>{draft.name}</h1>
        <p>{draft.description}</p>
        <Link to={'/drafts/$draftId/join'} params={{ draftId: draft.id }}>
          <Button>Join Draft</Button>
        </Link>
      </div>
      <DraftLayout />
    </div >
  )
}
