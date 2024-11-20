import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { HeroSelectionWidget } from '../components/deadlock/hero-selection'
import { Button } from '../components/ui/button'
import { RankSelectionWidget } from '../components/deadlock/rank-selection'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="container mx-auto p-2">
            <Link to="/drafts/new">
                <Button>
                    new Draft
                </Button>
            </Link>
            <Link to={"/drafts/$draftId"} params={{ draftId: "255e2a91b2" }}>
                <Button>
                    Test Draft
                </Button>
            </Link>
            <HeroSelectionWidget />
            <RankSelectionWidget />
        </div>
    )
}