import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import Navbar1 from '../Components/navbars/Navbar1';
import Navbar2 from '../Components/navbars/Navbar2';
import Navbar3 from '../Components/navbars/Navbar3';
import Navbar4 from '../Components/navbars/Navbar4';
import Navbar5 from '../Components/navbars/Navbar5';

export default function Navbars() {
    const NavBar1 = RespinsiveGrid(Navbar1, { name: 'CodeNavbar1' });
    const NavBar2 = RespinsiveGrid(Navbar2, { name: 'CodeNavbar2' });
    const NavBar3 = RespinsiveGrid(Navbar3, { name: 'CodeNavbar3' });
    const NavBar4 = RespinsiveGrid(Navbar4, { name: 'CodeNavbar4' });
    const NavBar5 = RespinsiveGrid(Navbar5, { name: 'CodeNavbar5' });

    return (
        <>
            <NavBar4 />
            <NavBar1 />
            <NavBar2 />
            <NavBar3 />
            <NavBar5 />
        </>

    )
}
