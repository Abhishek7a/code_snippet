import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import ecommerce1 from '../Components/ecommerce/Ecommerce1';
import ecommerce2 from '../Components/ecommerce/Ecommerce2';
import ecommerce3 from '../Components/ecommerce/Ecommerce3';
import ecommerce4 from '../Components/ecommerce/Ecommerce4';
import ecommerce5 from '../Components/ecommerce/Ecommerce5';
import ecommerce6 from '../Components/ecommerce/Ecommerce6';
import ecommerce7 from '../Components/ecommerce/Ecommerce7';
import ecommerce8 from '../Components/ecommerce/Ecommerce8';
import ecommerce9 from '../Components/ecommerce/Ecommerce9';

export default function Ecommerce() {
    const Ecommerce1 = RespinsiveGrid(ecommerce1, { name: 'CodeEcommerce1' });
    const Ecommerce2 = RespinsiveGrid(ecommerce2, { name: 'CodeEcommerce2' });
    const Ecommerce3 = RespinsiveGrid(ecommerce3, { name: 'CodeEcommerce3' });
    const Ecommerce4 = RespinsiveGrid(ecommerce4, { name: 'CodeEcommerce4' });
    const Ecommerce5 = RespinsiveGrid(ecommerce5, { name: 'CodeEcommerce5' });
    const Ecommerce6 = RespinsiveGrid(ecommerce6, { name: 'CodeEcommerce6' });
    const Ecommerce7 = RespinsiveGrid(ecommerce7, { name: 'CodeEcommerce7' });
    const Ecommerce8 = RespinsiveGrid(ecommerce8, { name: 'CodeEcommerce8' });
    const Ecommerce9 = RespinsiveGrid(ecommerce9, { name: 'CodeEcommerce9' });
    return (
        <>
            <Ecommerce1 />
            <Ecommerce2 />
            {/* <Ecommerce3 />
            <Ecommerce5 />
            <Ecommerce6 />
            <Ecommerce8 />
            <Ecommerce9 /> */}
        </>
    )
}
