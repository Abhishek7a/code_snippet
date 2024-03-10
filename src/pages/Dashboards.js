
import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import Dashboard1 from '../Components/dashboard/Dashboard1';
import Dashboard2 from '../Components/dashboard/Dashboard2';
import Dashboard3 from '../Components/dashboard/Dashboard3';
import Dashboard4 from '../Components/dashboard/Dashboard4';
// import Dashboard5 from '../Components/dashboard/Dashboard5';

export default function Dashboards() {
    const DashBoard1 = RespinsiveGrid(Dashboard1, { name: 'CodeDashboard1' });
    const DashBoard2 = RespinsiveGrid(Dashboard2, { name: 'CodeDashboard2' });
    const DashBoard3 = RespinsiveGrid(Dashboard3, { name: 'CodeDashboard3' });
    const DashBoard4 = RespinsiveGrid(Dashboard4, { name: 'CodeDashboard4' });
    // const DashBoard5 = RespinsiveGrid(Dashboard5, { name: 'CodeDashboard5' });

    return (
        <>
            <DashBoard1 />
            <DashBoard2 />
            <DashBoard3 />
            <DashBoard4 />
            {/* <DashBoard5 /> */}
        </>
    )
}
