import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import footer1 from '../Components/footer/Footer1';
import footer2 from '../Components/footer/Footer2';
import footer3 from '../Components/footer/Footer3';
import footer4 from '../Components/footer/Footer4';

export default function Footers() {
    const Footer1 = RespinsiveGrid(footer1, { name: 'CodeFooter1' });
    const Footer2 = RespinsiveGrid(footer2, { name: 'CodeFooter2' });
    const Footer3 = RespinsiveGrid(footer3, { name: 'CodeFooter3' });
    const Footer4 = RespinsiveGrid(footer4, { name: 'CodeFooter4' });

    return (
        <>
            <Footer1/>
            <Footer2/>
            <Footer3/>
            <Footer4/>
        </>
    )
}
