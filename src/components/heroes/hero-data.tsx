import { useEffect, useState } from 'react'
import rawHeroData from '../../assets/heroes.json'

export type Hero = {
    id: string,
    name: string,
    imageUrl: string
    experimental: boolean
}

const basePath = import.meta.env.BASE_URL

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