const db = require('../db/connection')
const cTable = require('console.table')
const inquirer = require('inquirer')


const viewDepartments = (repromptUser) => {
    const sql = 'SELECT name FROM department'

    db.promise().query(sql)
                .then( ([rows]) => {
                    console.table(rows);
                    repromptUser();
                })
}

const viewRoles = (repromptUser) => {
    const sql = `SELECT title, salary, department.name AS department 
                FROM role 
                LEFT JOIN department on role.department_id = department.id`

    db.promise().query(sql)
                .then( ([rows, fields]) => {
                    console.table(rows);
                    repromptUser();
                })

              
}

const viewEmployees = (repromptUser) => {
    const sql = `SELECT minion.first_name, minion.last_name, role.title, role.salary, department.name AS department, boss.last_name AS manager 
                FROM employee minion 
                LEFT JOIN employee boss 
                ON minion.manager_id = boss.id 
                LEFT JOIN role 
                ON minion.role_id = role.id 
                LEFT JOIN department on minion.role_id = department.id 
                GROUP BY minion.id;`

    db.promise().query(sql)
                .then( ([rows]) => {
                
                    console.table(rows);
                    repromptUser();
                })
}

const viewEmployeeByDept = () => {

}


module.exports = { viewDepartments, viewRoles, viewEmployees, viewEmployeeByDept}