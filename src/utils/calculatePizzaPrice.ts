const calculatePizzaPrice = (size: string): number => {
    return size === '30' ? 200 : 250
}
export default calculatePizzaPrice;
