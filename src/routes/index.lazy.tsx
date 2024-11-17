import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { HeroSelection } from '../components/heroes/HeroSelection'
import { Button } from '../components/ui/button'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <Link to="/drafts/new">
                <Button>
                    new Draft
                </Button>
            </Link>
            <HeroSelection />
        </div>
    )
}