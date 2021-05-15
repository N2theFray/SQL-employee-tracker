const inquirer = require('inquirer')
const { viewDepartments, viewRoles, viewEmployees, viewEmployeeByDept } = require('./View')
const { addDepartment, addRole, addEmployee } = require('./Add')
const { updateEmployee } = require('./Update')


const promptUser = () => {
    let answer = inquirer.prompt([{
        type: 'list',
        name: 'options',
        message: 'Welcome to your employee portal. What would you like to do?',
        choices: [
            // 'Add an employee',
            'View all departments', 
            'View all roles', 
            'View all employees', 
            // "View employees by department",
            // 'View department budgets',
            'Add an employee',
            'Add a department', 
            'Add a role', 
             
            // 'Update an employee role',
            // 'Update an employee manager',
            // 'Delete a department',
            // 'Delete a role',
            // 'Delete an employee',
            // 'No Action'
        ]
    }])
    .then(answer => {
        console.log(answer.options)
    
    switch(answer.options){
        case
            'View all departments':
            viewDepartments(promptUser)
            break;
        case
            'View all roles':
            viewRoles(promptUser) 
            break;
        case
            'View all employees':
            viewEmployees(promptUser);
            break;
        case
            'Add a department':
            addDepartment(promptUser);
            break;
        case
            'Add a role':
            addRole(promptUser);
            break;
        case
            'Add an employee':
            addEmployee(promptUser);
            break;
        case
            'Update an employee role':
            updateEmployee(promptUser);
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
    .catch (err => {
        console.log(err)
    })

    
          
}


module.exports =  { promptUser }