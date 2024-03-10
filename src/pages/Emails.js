import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import email1 from '../Components/email/Email1';
import email2 from '../Components/email/Email2';

export default function Emails() {
    const Email1 = RespinsiveGrid(email1, { name: 'CodeEmail1' });
    const Email2 = RespinsiveGrid(email2, { name: 'CodeEmail2' });

    return (
        <>
            <Email1 />
            <Email2 />
        </>
    )
}
