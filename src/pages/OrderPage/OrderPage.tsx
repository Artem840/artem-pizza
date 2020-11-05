import React, {FunctionComponent} from 'react';
import InputRadio from '../../components/InputRadio/InputRadio';
import InputCheckbox from "../../components/InputCheckbox/InputCheckbox";
import {Order, PizzaCheese, PizzaDough, PizzaMeat, PizzaSize, PizzaSouse, PizzaVegetables} from "../../types/types";

interface Props {
    order: Order;
    handleAdditional(input: HTMLInputElement): void;
    handleOrder(input: HTMLInputElement): void;
}

const OrderPage: FunctionComponent<Props> = ({ order, handleAdditional, handleOrder }) => {
    return (
        <>

            <fieldset style={{marginBottom: 20}}>
                <legend>Размер</legend>
                <InputRadio
                    id="size-1"
                    value={PizzaSize.SMALL}
                    group="size"
                    label="30 см"
                    isSelected={order.size === PizzaSize.SMALL}
                    handleChange={handleOrder}
                />
                <InputRadio
                    id="size-2"
                    value={PizzaSize.MEDIUM}
                    group="size"
                    label="35 см"
                    isSelected={order.size === PizzaSize.MEDIUM}
                    handleChange={handleOrder}
                />
            </fieldset>

            <fieldset style={{marginBottom: 20}}>
                <legend>Тесто</legend>
                <InputRadio
                    id="dough-1"
                    value={PizzaDough.THIN}
                    group="dough"
                    label={PizzaDough.THIN}
                    isSelected={order.dough === PizzaDough.THIN}
                    handleChange={handleOrder}
                />
                <InputRadio
                    id="dough-2"
                    value={PizzaDough.LUSH}
                    group="dough"
                    label={PizzaDough.LUSH}
                    isSelected={order.dough === PizzaDough.LUSH}
                    handleChange={handleOrder}
                />
            </fieldset>


            <fieldset style={{marginBottom: 20}}>
                <legend>Выберите соус</legend>
                <InputRadio
                    id="souse-1"
                    value={PizzaSouse.TOMATO}
                    group="souse"
                    label={PizzaSouse.TOMATO}
                    isSelected={order.souse === PizzaSouse.TOMATO}
                    handleChange={handleOrder}
                />
                <InputRadio
                    id="souse-2"
                    value={PizzaSouse.WHITE}
                    group="souse"
                    label={PizzaSouse.WHITE}
                    isSelected={order.souse === PizzaSouse.WHITE}
                    handleChange={handleOrder}
                />
                <InputRadio
                    id="souse-3"
                    value={PizzaSouse.SPICY}
                    group="souse"
                    label={PizzaSouse.SPICY}
                    isSelected={order.souse === PizzaSouse.SPICY}
                    handleChange={handleOrder}
                />
            </fieldset>


            <fieldset style={{marginBottom: 20}}>
                <legend>Добавьте сыр</legend>
                <InputCheckbox
                    id="cheese-1"
                    value={PizzaCheese.MOZZARELLA}
                    handleChange={handleAdditional}
                />
                <InputCheckbox
                    id="cheese-2"
                    value={PizzaCheese.CHEDDAR}
                    handleChange={handleAdditional}
                />
                <InputCheckbox
                    id="cheese-3"
                    value={PizzaCheese.DOR_BLUE}
                    handleChange={handleAdditional}
                />
            </fieldset>


            <fieldset style={{marginBottom: 20}}>
                <legend>Добавьте овощи</legend>
                <InputCheckbox
                    id="vegetables-1"
                    value={PizzaVegetables.TOMATO}
                    handleChange={handleAdditional}
                />
                <InputCheckbox
                    id="vegetables-2"
                    value={PizzaVegetables.MUSHROOMS}
                    handleChange={handleAdditional}
                />
                <InputCheckbox
                    id="vegetables-3"
                    value={PizzaVegetables.PEPPER}
                    handleChange={handleAdditional}
                />
            </fieldset>


            <fieldset style={{marginBottom: 20}}>
                <legend>Добавьте мясо</legend>
                <InputCheckbox
                    id="meat-1"
                    value={PizzaMeat.BACON}
                    handleChange={handleAdditional}
                />
                <InputCheckbox
                    id="meat-2"
                    value={PizzaMeat.PEPPERONI}
                    handleChange={handleAdditional}
                />
                <InputCheckbox
                    id="meat-3"
                    value={PizzaMeat.HAM}
                    handleChange={handleAdditional}
                />
            </fieldset>
        </>
    );
}

export default React.memo(OrderPage);
