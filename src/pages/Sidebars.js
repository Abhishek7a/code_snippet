import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import Sidebar1 from '../Components/sidebars/Sidebar1'; 
import Sidebar2 from '../Components/sidebars/Sidebar2'; 
import Sidebar3 from '../Components/sidebars/Sidebar3'; 

export default function Sidebars() {
    const SideaBar1 = RespinsiveGrid(Sidebar1, { name: 'CodeSidebar1' });
    const SideaBar2 = RespinsiveGrid(Sidebar2, { name: 'CodeSidebar2' });
    const SideaBar3 = RespinsiveGrid(Sidebar3, { name: 'CodeSidebar3' });

    return (
        <>
            <SideaBar1 />
            <SideaBar2 />
            <SideaBar3 />
        </>
    )
}
