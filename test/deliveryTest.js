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