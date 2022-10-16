function createRestaurant(restaurantName) {
   var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [], 
      lunch: [], 
      dinner: [],
    },
  }
  return restaurant
}
function addMenuItem(restaurant, menuItem) {
  if(menuItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(menuItem)) {
      restaurant.menus.breakfast.push(menuItem)
  }   else if(menuItem.type === 'lunch' && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem)
  }   else if (menuItem.type === 'dinner' && !restaurant.menus.dinner.includes(menuItem)){
    restaurant.menus.dinner.push(menuItem)
  }
}

function removeMenuItem(restaurant, itemName, menuType) {
  if (menuType === 'breakfast') {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (restaurant.menus.breakfast[i].name === itemName) {
        restaurant.menus.breakfast.splice(i,1)
        return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`
      }
    }
  }
  if (menuType === 'lunch') {
    for (var i = 0; i < restaurant.menus.lunch.length; i++) {
      if (restaurant.menus.lunch[i].name === itemName) {
        restaurant.menus.lunch.splice(i,1)
        return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`
      }
    }
  }
  if (menuType === 'dinner') {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (restaurant.menus.dinner[i].name === itemName) {
        restaurant.menus.dinner.splice(i,1)
        return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`
      }
    }
  }
return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}

module.exports = {
   createRestaurant, 
   addMenuItem,
   removeMenuItem
}