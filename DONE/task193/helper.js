export const bakeMyCake = (ingredients) => {
    if (!ingredients) {
      throw new Error('Не хватает ингредиентов для приготовления торта')
    }

    console.log(`Baking a cake!`)

    return {
      type: 'cake',
      from: ingredients
    }
}
