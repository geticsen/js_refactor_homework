
const employeeTest = require('ava');
const { Employee } = require('../src/Employee');

employeeTest('test case 1:  Employee toString with name is jack and type is engineer',t => {
    const employee =new Employee("jack","engineer");
    t.is("jack (engineer)",employee.toString())
})