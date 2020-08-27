const { deliveryDate } = require('../src/delivery');

const deliveryTest = require('ava');

deliveryTest('case 1:isRush true ,deliveryState is MA',t => {
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
deliveryTest('case 2:isRush true ,deliveryState is NY',t => {
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
deliveryTest('case 3:isRush true ,deliveryState is ELSE',t => {
    const anOrder={
        deliveryState:'ELSE',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(4,deliveryDate(anOrder,true))
})

deliveryTest('case 4:isRush false ,deliveryState is MA',t => {
    const anOrder={
        deliveryState:'MA',
        placedOn:{
            plusDays:(plusTime)=>{
                return plusTime;
            }
        }
    };
    t.is(4,deliveryDate(anOrder,false))
})