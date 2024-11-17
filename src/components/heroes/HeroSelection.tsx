import { useHeroData, Hero } from "./hero-data"


export const HeroSelection = ({ }) => {
    const heroes = useHeroData(false)
    return (
        <div>
            Heroes
            <ul className="flex flex-row flex-wrap gap-1    ">
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
        <div className="border-2 border-darkBg hover:border-red-300">
            <img src={hero.imageUrl} alt={hero.name} className="block w-[110px] h-[150px]" />
            {hero.name}
        </div>
    )
}