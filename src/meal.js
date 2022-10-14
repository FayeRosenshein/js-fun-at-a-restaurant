function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`
}
function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}
function addIngredients(item, list) {
  if (list.includes(item) === false) {
    list.push(item)
  }
  return list
}
function formatPrice(price) {
  return `$${price}`
}
function decreasePrice(price) {
  var discountedPrice = price * .9
  return discountedPrice
}

function createRecipe(name, ingredients, menuItemType) {
  var recipe = {
    title: name,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
