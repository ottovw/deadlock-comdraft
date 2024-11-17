import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { HeroSelection } from '../components/heroes/HeroSelection'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <Link to="/drafts/new">
                new Draft
            </Link>
            <HeroSelection />
        </div>
    )
}