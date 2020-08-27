calculateRushdeliveryDate = (anOrder) => {
  let deliveryTime = 0 ;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  }
  else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}
calculateNotRushdeliveryDate = (anOrder)=>{
  let deliveryTime = 0 ;
  if ([
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return anOrder.placedOn.plusDays(2 + deliveryTime);
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
