import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import card1 from '../Components/cards/Card1';
import card2 from '../Components/cards/Card2';
import card3 from '../Components/cards/Card3';
import card4 from '../Components/cards/Card4';
import card5 from '../Components/cards/Card5';

export default function Cards() {
    const Card1 = RespinsiveGrid(card1, { name: 'CodeCard1' });
    const Card2 = RespinsiveGrid(card2, { name: 'CodeCard2' });
    const Card3 = RespinsiveGrid(card3, { name: 'CodeCard3' });
    const Card4 = RespinsiveGrid(card4, { name: 'CodeCard4' });
    const Card5 = RespinsiveGrid(card5, { name: 'CodeCard5' });
    return (
        <>
            <Card4 />
            <Card1 />
            <Card2 />
            <Card3 />
            <Card5 />
        </>

    )
}
