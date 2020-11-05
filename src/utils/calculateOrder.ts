import calculatePizzaPrice from './calculatePizzaPrice'

const calculateOrder = (size: string, additional: number): number => {
    return calculatePizzaPrice(size) + (additional * 29)
}
export default calculateOrder
