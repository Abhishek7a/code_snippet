import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import form1 from '../Components/forms/Form1';
import form2 from '../Components/forms/Form2';
import form3 from '../Components/forms/Form3';
import form4 from '../Components/forms/Form4';
import form5 from '../Components/forms/Form5';
import form6 from '../Components/forms/Form6';

export default function Forms() {
    const Form1 = RespinsiveGrid(form1, { name: 'CodeForm1' });
    const Form2 = RespinsiveGrid(form2, { name: 'CodeForm2' });
    const Form3 = RespinsiveGrid(form3, { name: 'CodeForm3' });
    const Form4 = RespinsiveGrid(form4, { name: 'CodeForm4' });
    const Form5 = RespinsiveGrid(form5, { name: 'CodeForm5' });
    const Form6 = RespinsiveGrid(form6, { name: 'CodeForm6' });

    return (
        <>
            <Form1 />
            {/* <Form2 /> */}
            <Form3 />
            <Form4 />
            {/* <Form5 /> */}
            {/* <Form6 /> */}
        </>
    )
}
