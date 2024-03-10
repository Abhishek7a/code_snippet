import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import card1 from '../Components/cards/Card1';
import card2 from '../Components/cards/Card2';
import card3 from '../Components/cards/Card3';

export default function Cards() {
    const Card1 = RespinsiveGrid(card1, { name: 'CodeCard1' });
    const Card2 = RespinsiveGrid(card2, { name: 'CodeCard2' });
    const Card3 = RespinsiveGrid(card3, { name: 'CodeCard3' });
    return (
        <>
            <Card1 />
            <Card2 />
            <Card3 />
        </>

    )
}
