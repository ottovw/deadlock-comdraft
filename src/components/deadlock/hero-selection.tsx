import React, { useState } from 'react';
import { useHeroData } from './deadlock-data';

const priorities = ['selected', 'priority', 'high-prio'] as const;

export type HeroSelection = {
    [key: string]: typeof priorities[number]
}

export const HeroSelectionWidget = ({ }) => {
    const heroes = useHeroData(false);
    const [selection, setSelection] = useState<HeroSelection>({});

    const handleLeftClick = (heroId: string) => {
        setSelection(prevSelection => {
            const newSelection = { ...prevSelection };
            if (newSelection[heroId]) {
                delete newSelection[heroId];
            } else {
                newSelection[heroId] = 'selected';
            }
            return newSelection;
        });
    };

    const handleRightClick = (event: React.MouseEvent, heroId: string) => {
        event.preventDefault();
        setSelection(prevSelection => {
            const newSelection = { ...prevSelection };
            if (!newSelection[heroId]) {
                newSelection[heroId] = 'selected';
            }
            const currentPriority = newSelection[heroId];
            const currentIndex = priorities.indexOf(currentPriority as typeof priorities[number]);
            const nextIndex = (currentIndex + 1) % priorities.length;
            newSelection[heroId] = priorities[nextIndex];
            return newSelection;
        });
    };

    return (
        <div className="flex flex-col gap-5">
            <ul className="flex flex-row flex-wrap gap-1">
                {heroes.map(hero => (
                    <li
                        key={hero.id}
                        className={`border-4 ${getHeroBorderColor(selection, hero.id)} cursor-pointer border-yel`}
                        onClick={() => handleLeftClick(hero.id)}
                        onContextMenu={(event) => handleRightClick(event, hero.id)}
                    >
                        <img src={hero.imageUrl} alt={hero.name} className="hover:scale-125 block w-[90px] h-[120px]" />
                        {hero.name}
                    </li>
                ))}
            </ul>
            <span className="text-lightText/50">Left-Click: Select/Unselect. Right-Click: Toggle Priorities.</span>
        </div>
    );
};

const getHeroBorderColor = (selection: HeroSelection, heroId: string): string => {
    const priority = selection[heroId];
    switch (priority) {
        case 'selected':
            return 'border-lightText bg-lightText/40';
        case 'priority':
            return 'border-yellow-400 bg-yellow-400/40';
        case 'high-prio':
            return 'border-purple-500 bg-purple-500/40';
        default:
            return 'border-darkBg';
    }
};