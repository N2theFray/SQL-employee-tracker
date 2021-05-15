const db = require('../db/connection')
const cTable = require('console.table')
const inquirer = require('inquirer')
const { viewDepartments, viewRoles, viewEmployees, viewEmployeeByDept } = require('./View')

var roleArray = [];
var roleId = [];
var roleName = [];
var deptArray = [];
var deptId = [];
var deptName = []
var managerArray = [];
var managerId = [];
var managerName = [];

//recieves all array data from database to build init inquiry choices
async function constructorFunction () {
    let [roles, r] = await db.promise().query(`select * from role`)
    let [dept, d] = await db.promise().query(`select * from department`)
    let [manager, f] = await db.promise().query(`select distinct concat (boss.first_name," ", boss.last_name) as manager, boss.id as managerId from employee minion left join employee boss on minion.manager_id =
    boss.id;`)

    for (i=0; i<roles.length; i++){
        roleArray.push(roles[i].title, roles[i].id)
    }
    for (j=0; j<dept.length; j++){
        deptArray.push(dept[j].name, dept[j].id)
    }
    for (k=0; k<manager.length; k++){
        if (manager[k].manager){
                    managerArray.push(manager[k].manager, manager[k].managerId)
        }
    }
    for (l=0; l<managerArray.length; l++){
        if (!Number.isInteger(managerArray[l])){
            managerName.push(managerArray[l])
        }
    }
    for (l=0; l<roleArray.length; l++){
        if (!Number.isInteger(roleArray[l])){
            roleName.push(roleArray[l])
        }
    }
    for (l=0; l<deptArray.length; l++){
        if (!Number.isInteger(deptArray[l])){
            deptName.push(deptArray[l])
        }
    }

}

//after inquirer choices, parses out the id value for string choice 
async function parseFunction (data){
    for(i=0; i<managerArray.length; i++){
        if(data.managerName === managerArray[i]){
            managerId.push(managerArray[i+1])
        }
    }
    for(i=0; i<roleArray.length; i++){
        if(data.roleName === roleArray[i]){
            roleId.push(roleArray[i+1])
        }
    }
    for(i=0; i<deptArray.length; i++){
        if(data.deptName === deptArray[i]){
            deptId.push(deptArray[i+1])
        }
    }
}


const addDepartment = async (repromptUser) => {
    let answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the new department?'
        }
    ])

    
    let sql = `INSERT INTO department (name)
                VALUES (?)`
    let params = [answer.deptName]
    db.promise().query(sql, params)
    repromptUser();
    


}

const addRole = async (repromptUser) => {
    await constructorFunction();

    let answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'What is the new title?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Postitions Salary?'
        },
        {
            type: 'list',
            name: 'deptName',
            message: 'Which department does it belong to?',
            choices: deptName
        }
    ])
    
    
    await parseFunction(answer)
    
    let sql = `INSERT INTO role (title, salary, department_id)
                VALUES (?,?,?)`
        let params = [answer.roleName, answer.salary, deptId]
        db.promise().query(sql, params).then(repromptUser())


}

const addEmployee = async (repromptUser) => {
    await constructorFunction();

    let answer = await inquirer.prompt([
        {
            type:'input',
            name: 'firstName',
            message: 'What is the employees first name?'
        },
        {
            type:'input',
            name: 'lastName',
            message: 'What is the employees last name?'
        },
        {
            type:'list',
            name: 'roleName',
            message: 'What is the employees role',
            choices: roleName
        },
        {
            type:'list',
            name: 'managerName',
            message: 'What is the employees manager',
            choices: managerName
        }
    ])
        

        await parseFunction(answer)
        
        
        let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                   VALUES (?,?,?,?)`
        let params = [answer.firstName, answer.lastName, roleId, managerId]
        db.promise().query(sql, params).then(repromptUser())
}

module.exports = { addDepartment, addRole, addEmployee }