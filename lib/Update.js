const db = require('../db/connection')
const cTable = require('console.table')
const inquirer = require('inquirer')

var roleArray = [];
var roleId = [];
var roleName = [];
var deptArray = [];
var deptId = [];
var deptName = []
var employeeArray = [];
var employeeId = [];
var employeeName = [];


async function constructorFunction () {
    let [roles, r] = await db.promise().query(`select * from role`)
    let [dept, d] = await db.promise().query(`select * from department`)
    let [employee, f] = await db.promise().query('select concat(first_name, " ", last_name) as employee, id from employee')

    for (i=0; i<roles.length; i++){
        roleArray.push(roles[i].title, roles[i].id)
    }
    for (j=0; j<dept.length; j++){
        deptArray.push(dept[j].name, dept[j].id)
    }
    for (k=0; k<employee.length; k++){
        employeeArray.push(employee[k].employee, employee[k].id)
        
    }
    for (l=0; l<employeeArray.length; l++){
        if (!Number.isInteger(employeeArray[l])){
            employeeName.push(employeeArray[l])
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

async function parseFunction (data){
    for(i=0; i<employeeArray.length; i++){
        if(data.employeeName === employeeArray[i]){
            employeeId.push(employeeArray[i+1])
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
const updateEmployee = async () => {
    await constructorFunction();
    
    let answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeName',
            message: "Which employee would you like to update?",
            choices: employeeName
        },
        {
            type: 'list',
            name: 'roleName',
            message: 'What is his new job?',
            choices: roleName
        }
    ])

    await parseFunction(answer)
    console.log(answer)
    console.log(answer.roleName)
    console.log(answer.employeeName)
    console.log(roleId)

    console.log(employeeId)
   
    let sql = `UPDATE employee SET role_id=?
                WHERE id = ?`
    let params = [roleId, employeeId]
        
    db.promise().query(sql, params)
}

module.exports = { updateEmployee }