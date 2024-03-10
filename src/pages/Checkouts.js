import React from 'react'
import RespinsiveGrid from '../Components/ResponsiveGrid';
import Checkout1 from '../Components/checkout/Checkout1';
import Checkout2 from '../Components/checkout/Checkout2';

export default function Checkouts() {
    const CheckOut1 = RespinsiveGrid(Checkout1, { name: 'CodeCheckout1' });
    const CheckOut2 = RespinsiveGrid(Checkout2, { name: 'CodeCheckout2' });

    return (
        <>
            <CheckOut1 />
            <CheckOut2 />
        </>
    )
}
