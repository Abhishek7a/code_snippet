
import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import animation1 from '../Components/Animations/Animation1';

export default function Dashboards() {
    const Animation1 = RespinsiveGrid(animation1, { name: 'CodeAnimation1' });

    return (
        <>
            <Animation1 />
        </>
    )
}
