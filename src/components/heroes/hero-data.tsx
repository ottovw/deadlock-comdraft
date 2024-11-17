import rawHeroData from '../../assets/heroes.json'

export type Hero = {
    id: string,
    name: string,
    imageUrl: string
}

const basePath = import.meta.env.BASE_URL

const heroData: Hero[] = rawHeroData.map(hero => {
    hero.imageUrl = basePath + hero.imageUrl
    return hero;
}).sort((a, b) => a.name.localeCompare(b.name))

export const getHeroData = () => {
    return heroData
}