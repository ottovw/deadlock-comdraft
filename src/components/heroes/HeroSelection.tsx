import { getHeroData, Hero } from "./hero-data"


export const HeroSelection = ({ }) => {
    const heroes = getHeroData()
    return (
        <div>
            Heroes
            <ul className="flex flex-row flex-wrap gap-5">
                {heroes.map(hero => (
                    <li key={hero.id}>
                        <HeroDisplay hero={hero} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const HeroDisplay = ({ hero }: { hero: Hero }) => {
    return (
        <div className="border-1">
            <img src={hero.imageUrl} alt={hero.name} className="block w-[110px] h-[150px]" />
            {hero.name}
        </div>
    )
}