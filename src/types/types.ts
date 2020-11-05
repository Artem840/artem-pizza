export enum PizzaSize {
    SMALL = '30',
    MEDIUM = '35'
}

export enum PizzaDough {
    THIN = 'Тонкое',
    LUSH = 'Пышное'
}

export enum PizzaSouse {
    TOMATO = 'Томатный',
    WHITE = 'Белый',
    SPICY = 'Острый'
}

export enum PizzaCheese {
    MOZZARELLA = 'Моцарелла',
    CHEDDAR = 'Чеддер',
    DOR_BLUE = 'Дор Блю'
}

export enum PizzaVegetables {
    TOMATO = 'Помидор',
    MUSHROOMS = 'Грибы',
    PEPPER = 'Перец'
}

export enum PizzaMeat {
    BACON = 'Бекон',
    PEPPERONI = 'Пепперони',
    HAM = 'Ветчина'
}

export interface Order {
    size: string;
    dough: string;
    souse: string;
    additional: string[];
}
