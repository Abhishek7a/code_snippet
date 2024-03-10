import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import dialogBox1 from '../Components/dialogBox/DialogBox1';
import dialogBox2 from '../Components/dialogBox/DialogBox2';
import dialogBox3 from '../Components/dialogBox/DialogBox3';

export default function DialogBox() {
    const DialogBox1 = RespinsiveGrid(dialogBox1, { name: 'CodeDialogBox1' });
    const DialogBox2 = RespinsiveGrid(dialogBox2, { name: 'CodeDialogBox2' });
    const DialogBox3 = RespinsiveGrid(dialogBox3, { name: 'CodeDialogBox3' });

    return (
        <>
            <DialogBox1 />
            <DialogBox2 />
            <DialogBox3 />
        </>
    )
}
