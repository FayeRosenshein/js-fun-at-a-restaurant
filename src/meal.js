function nameMenuItem(menuItemName) {
  console.log(`Delicious ${menuItemName}`)
  return `Delicious ${menuItemName}`
}
function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}
function addIngredients (food) {
  var ingredients = []
   //addIngredients = ingredients.push('cheese')
   ingredients.push(food)
   console.log(ingredients);
   return ingredients
}

module.exports = {
  nameMenuItem,
   createMenuItem,
   addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
