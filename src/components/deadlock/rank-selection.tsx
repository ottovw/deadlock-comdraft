import { useState } from 'react';
import { useRankData } from './deadlock-data';

export const RankSelectionWidget = () => {
    const ranks = useRankData();
    const [selectedRank, setSelectedRank] = useState<string | null>(null);

    const handleRankClick = (rankId: string) => {
        setSelectedRank(prevSelectedRank => (prevSelectedRank === rankId ? null : rankId));
    };

    return (
        <ul className="flex flex-row flex-wrap gap-1">
            {ranks.map(rank => (
                <li
                    key={rank.tier}
                    className={`border-4 ${getRankBorderColor(selectedRank, rank.tier)} cursor-pointer flex flex-col items-center`}
                    onClick={() => handleRankClick(rank.tier)}
                >
                    <img src={rank.imageUrl} alt={rank.name} className="block w-[60px] h-[60px]" />
                    <span className="text-center">{rank.name}</span>
                </li>
            ))}
        </ul>
    );
};

const getRankBorderColor = (selectedRank: string | null, rankId: string): string => {
    return selectedRank === rankId ? 'border-lightText bg-lightText/40' : 'border-darkBg';
};