import { createFileRoute } from '@tanstack/react-router'
import { HeroSelectionWidget } from '../../../../components/deadlock/hero-selection'
import { RankSelectionWidget } from '../../../../components/deadlock/rank-selection'
import { Button } from '../../../../components/ui/button'

export const Route = createFileRoute('/drafts/$draftId/_draft-container/join')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="container mx-auto flex flex-col gap-5">
    {/* <h2>Join Draft</h2> */}
    <h3 className='text-2xl font-bold'>Select your roster</h3>
    <HeroSelectionWidget />
    <h3 className='text-2xl font-bold'>Select your rank</h3>
    <RankSelectionWidget />
    <div>
      <Button>
        Join Draft
      </Button>
    </div>
  </div>
}
