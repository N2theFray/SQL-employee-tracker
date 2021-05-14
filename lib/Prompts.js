const inquirer = require('inquirer')
const { viewDepartments, viewRoles, viewEmployees, viewEmployeeByDept } = require('./View')
const { addDepartment, addRole, addEmployee } = require('./Add')
const { updateEmployee } = require('./Update')


const promptUser = async () => {
    inquirer.prompt([{
        type: 'list',
        name: 'options',
        message: 'Welcome to your employee portal. What would you like to do?',
        choices: [
            'Add an employee',
            // 'View all departments', 
            // 'View all roles', 
            // 'View all employees', 
            // "View employees by department",
            // 'View department budgets',
            // 'Add a department', 
            // 'Add a role', 
             
            // 'Update an employee role',
            // 'Update an employee manager',
            // 'Delete a department',
            // 'Delete a role',
            // 'Delete an employee',
            // 'No Action'
        ]
    }])
    .then(answers => {
        switch(answers.options){
            case
            'View all departments':
            viewDepartments()
            break;

            case
            'View all roles':
            viewRoles() 
            break;

            case
            'View all employees':
            viewEmployees();
            break;

            case
            'Add a department':
            addDepartment();
            break;

            case
            'Add a role':
            addRole();
            break;

            case
            'Add an employee':
            addEmployee();
            break;

            case
            'Update an employee role':
            updateEmployee();
            break;

            case
            'Update an employee manager':
            console.log()
            break;

            case
            "View employees by department":
            console.log()
            break;

            case
            'Delete a department':
            console.log()
            break;

            case
            'Delete a role':
            console.log()
            break;

            case
            'Delete an employee':
            console.log()
            break;

            case
            'View department budgets':
            console.log()
            break;

            case
            'No Action':
            console.log()
            break;
          }
        })     
}


module.exports = { promptUser }