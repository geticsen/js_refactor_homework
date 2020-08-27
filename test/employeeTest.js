
const employeeTest = require('ava');
const { Employee } = require('../src/Employee');

employeeTest('test case 1:  Employee toString with name is jack and type is engineer',t => {
    const employee =new Employee("jack","engineer");
    t.is("jack (engineer)",employee.toString())
})
employeeTest('test case 2: validateType is not allow',t => {
    try{
        new Employee("james","6666");
        t.fail();
    }catch(e){
        t.is('Employee cannot be of type 6666',e.message)
    }
})
