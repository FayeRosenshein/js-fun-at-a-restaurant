function takeOrder(orderNumber, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(orderNumber)
  }
  return takeOrder
}
function refundOrder(orderNumber, deliveryOrders) {
  for (var i =0; i < deliveryOrders.length; i++ ) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i,1)
    }
  }
}
function listItems(deliveryOrders) {
  var items = ''
  for (var i = 0; i < deliveryOrders.length; i ++) {
    if (i === deliveryOrders.length-1) {
      items += `${deliveryOrders[i].item}`
    } else {
      items += `${deliveryOrders[i].item}, `
    }
  }
  return items
}
function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true
    } 
  }
  return false
}



module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}