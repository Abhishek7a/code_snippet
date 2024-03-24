import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import login1 from '../Components/login/Login1';
import login2 from '../Components/login/Login2';
import login3 from '../Components/login/Login3';
import login4 from '../Components/login/Login4';
import login5 from '../Components/login/Login5';
import login6 from '../Components/login/Login6';
import login7 from '../Components/login/Login7';
import login8 from '../Components/login/Login8';
import login9 from '../Components/login/Login9';
import login10 from '../Components/login/Login10';

export default function Login() {
    const Login1 = RespinsiveGrid(login1, { name: 'CodeLogin1' });
    const Login2 = RespinsiveGrid(login2, { name: 'CodeLogin2' });
    const Login3 = RespinsiveGrid(login3, { name: 'CodeLogin3' });
    const Login4 = RespinsiveGrid(login4, { name: 'CodeLogin4' });
    const Login5 = RespinsiveGrid(login5, { name: 'CodeLogin5' });
    const Login6 = RespinsiveGrid(login6, { name: 'CodeLogin6' });
    const Login7 = RespinsiveGrid(login7, { name: 'CodeLogin7' });
    const Login8 = RespinsiveGrid(login8, { name: 'CodeLogin8' });
    const Login9 = RespinsiveGrid(login9, { name: 'CodeLogin9' });
    const Login10 = RespinsiveGrid(login10, { name: 'CodeLogin10' });
    return (
        <>
            {/* <Login1 /> */}
            <Login2 />
            {/* <Login3 /> */}
            {/* <Login4 /> */}
            <Login5 />
            {/* <Login6 /> */}
            {/* <Login7 /> */}
            {/* <Login8 /> */}
            {/* <Login9 /> */}
            {/* <Login10 />  */}
        </>
    )
}
