import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import pageNotFound1 from '../Components/404/PageNotFound1';
import pageNotFound2 from '../Components/404/PageNotFound2';

export default function PageNotFound() {
    const PageNotFound1 = RespinsiveGrid(pageNotFound1, { name: 'CodePageNotFound1' });
    const PageNotFound2 = RespinsiveGrid(pageNotFound2, { name: 'CodePageNotFound2' });

    return (
        <>
            <PageNotFound1 />
            <PageNotFound2 />
        </>
    )
}
