
import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import accordion1 from '../Components/accordions/Accordion1';
import accordion2 from '../Components/accordions/Accordion2';

export default function Dashboards() {
    const Accordions1 = RespinsiveGrid(accordion1, { name: 'codeAccordion1' });
    const Accordions2 = RespinsiveGrid(accordion2, { name: 'codeAccordion2' });

    return (
        <>
            <Accordions1 />
            <Accordions2 />
        </>
    )
}
