import React, {FunctionComponent, useState} from 'react';
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import calculateOrder from "../utils/calculateOrder";
import {Order, PizzaDough, PizzaSize, PizzaSouse} from "../types/types";

const RootLayout:FunctionComponent = () => {
    const [order, setOrder] = useState<Order>({
        size: PizzaSize.SMALL,
        dough: PizzaDough.THIN,
        souse: PizzaSouse.TOMATO,
        additional: []
    });
    const [showPayment, setShowPayment] = useState<boolean>(false);

    const handleAdditional = (input: HTMLInputElement): void => {
        if (input.checked) {
            setOrder((order) => ({
                ...order,
                additional: [...order.additional, input.value]
        }))
        } else {
            setOrder((order) => ({
                ...order,
                additional: order.additional.filter((item) => item !== input.value)
            }))
        }
    }

    const handleOrder = (input: HTMLInputElement): void => {
        setOrder((order) => ({
            ...order,
            [input.name]: input.value
        }))
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'cornflowerblue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: 360, padding: '20px', backgroundColor: '#fff' }}>
                {showPayment ? (
                    <PaymentPage order={order}/>
                ) : (
                    <OrderPage order={order} handleAdditional={handleAdditional} handleOrder={handleOrder}/>
                )}

                <button onClick={() => setShowPayment(!showPayment)}>
                    {showPayment ?
                        'Оплатить ' :
                        'Заказать за '}
                    {calculateOrder(order.size, order.additional.length)} руб
                </button>
            </div>
        </div>
    );
}

export default RootLayout;
