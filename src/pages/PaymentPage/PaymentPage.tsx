import React, {FunctionComponent} from 'react';
import {Order} from "../../types/types";

interface Props {
    order: Order;
}

const PaymentPage:FunctionComponent<Props> = ({ order }) => {
    const { size, dough, souse, additional } = order;

    return (
        <>
            <p>Размер: {size} см</p>
            <p>Тесто: {dough}</p>
            <p>Соус: {souse}</p>
            <p>Дополнительно: {additional.join(', ')}</p>
        </>
    );
}

export default React.memo(PaymentPage);
