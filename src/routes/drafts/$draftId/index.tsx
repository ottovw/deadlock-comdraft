import { createFileRoute } from '@tanstack/react-router'
import supabaseClient from '../../../supabase';

export const Route = createFileRoute('/drafts/$draftId/')({
  component: RouteComponent,
  loader: async ({ params: { draftId } }) => {
    console.log(draftId)
    const response = await supabaseClient.from('drafts')
      .select().eq('id', draftId).single()
    if (response.error) {
      throw new Error(response.error.message)
    }
    return response.data
  }
})

function RouteComponent() {

  const draft = Route.useLoaderData()

  return <div>
    Draft
    id {draft.id}
    <h1>{draft.name}</h1>
    <p>{draft.description}</p>
  </div>
}
