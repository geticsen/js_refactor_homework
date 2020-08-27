const { deliveryDate } = require('../src/delivery');

const deliveryTest = require('ava');

deliveryTest('case 1:isRush true ,deliveryState in MA',t => {
    const anOrder={
        deliveryState:'MA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(2,deliveryDate(anOrder,true))
})
deliveryTest('case 1:isRush true ,deliveryState in NY',t => {
    const anOrder={
        deliveryState:'NY',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(3,deliveryDate(anOrder,true))
})