export const getApples = (fruits) => {
    const onlyApple = fruits
        .filter(fruit => fruit.type === 'apple')
        .map(fruit => fruit)
    return onlyApple
};
