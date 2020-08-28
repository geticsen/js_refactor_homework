
const printTest = require('ava');
const { printOwing } = require('../src/print');

printTest('test case 1:  ',t => {
    const invoice = {
        customer:"james",
        borderSpacing:[
            {amount:1},
            {amount:1},
            {amount:1},
        ] 
    }
    const result  = printOwing(invoice);
    console.log(result);
    t.is("***********************\n**** Customer Owes ****\n***********************\nname: james\namount: 3\namount: 9/27/2020\n",result)
})

