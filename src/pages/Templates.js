import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import template1 from '../Components/template/Template1';
import template2 from '../Components/template/Template2';
import template3 from '../Components/template/Template3';
import template4 from '../Components/template/Template4';
import template5 from '../Components/template/Template5';
import template6 from '../Components/template/Template6';

export default function Emails() {
    const Template1 = RespinsiveGrid(template1, { name: 'CodeTemplate1' });
    const Template2 = RespinsiveGrid(template2, { name: 'CodeTemplate2' });
    const Template3 = RespinsiveGrid(template3, { name: 'CodeTemplate3' });
    const Template4 = RespinsiveGrid(template4, { name: 'CodeTemplate4' });
    const Template5 = RespinsiveGrid(template5, { name: 'CodeTemplate5' });
    const Template6 = RespinsiveGrid(template6, { name: 'CodeTemplate6' });

    return (
        <>
            <Template1 />
            <Template2 />
            <Template3 />
            <Template4 />
            <Template5 />
            <Template6 />
        </>
    )
}
