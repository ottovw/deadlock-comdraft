import { createLazyFileRoute } from '@tanstack/react-router'
import { HeroSelection } from '../components/heroes/HeroSelection'

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <HeroSelection />
        </div>
    )
}