import { useEffect, useState } from 'react'
import rawHeroData from '../../assets/heroes.json'
import rawRankData from '../../assets/ranks.json'

export type Hero = {
    id: string,
    name: string,
    imageUrl: string
    experimental: boolean
}

//const basePath = import.meta.env.BASE_URL
const basePath = ""


const heroData: Hero[] = rawHeroData.map(hero => {
    hero.imageUrl = basePath + hero.imageUrl
    return hero;
}).sort((a, b) => a.name.localeCompare(b.name))

export const getHeroData = (includeExperimental = true) => {
    return includeExperimental ? heroData : heroData.filter(hero => !hero.experimental)
}

export const useHeroData = (includeExperimental = true) => {
    const [heroes, setHereos] = useState<Hero[]>(heroData)
    useEffect(() => {
        setHereos(getHeroData(includeExperimental))
    }, [includeExperimental]);
    return heroes
}

export type Rank = {
    tier: string,
    name: string,
    imageUrl: string,
}

const rankData: Rank[] = rawRankData.map(
    rank => {
        rank.imageUrl = basePath + rank.imageUrl
        return rank
    }
).sort((a, b) => a.tier - b.tier) as unknown as Rank[]

export const useRankData = () => {
    const [ranks] = useState<Rank[]>(rankData)
    return ranks
}