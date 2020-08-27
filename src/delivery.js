calculateRushdeliveryDate = (anOrder) => {
  const baseDeliveryTime = 1;
  const nearCity = ['MA', 'CT',]
  const farCity = ['NY', 'NH',]
  if (nearCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(1 + baseDeliveryTime);
  }
  else if (farCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(2 + baseDeliveryTime);
  }
  else {
    return anOrder.placedOn.plusDays(3 + baseDeliveryTime);
  }
}
calculateNotRushdeliveryDate = (anOrder) => {
  const baseDeliveryTime = 2;
  const nearCity = ['MA', 'CT', 'NY',]
  const farCity = ['ME', 'NH',]
  if (nearCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(2 + baseDeliveryTime);
  }
  else if (farCity.includes(anOrder.deliveryState)) {
    return anOrder.placedOn.plusDays(3 + baseDeliveryTime);
  }
  else {
    return anOrder.placedOn.plusDays(4 + baseDeliveryTime);
  }

}
function deliveryDate(anOrder, isRush) {
  if (isRush) {
    return calculateRushdeliveryDate(anOrder);
  }
  else {
    return calculateNotRushdeliveryDate(anOrder);

  }
}
module.exports = {
  deliveryDate,
}
