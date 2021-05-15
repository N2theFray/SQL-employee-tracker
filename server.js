const db = require('./db/connection')
const { promptUser } = require('./lib/Prompts');
const { viewDepartments, viewRoles, viewEmployees, viewEmployeeByDept } = require('./lib/View')

db.connect(function(err){
    if (err) throw err;
    startScreen();
})


function startScreen () {
    console.log('*********************')
    console.log('*                   *')
    console.log('*   Employee        *')
    console.log('*   Tracker         *')
    console.log('*                   *')
    console.log('*********************')

  // viewDepartments()
promptUser();
}
// promptUser();



