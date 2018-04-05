const employeesRoutes = require('./employees/employees.routes');
const loginRoutes = require('./login/login.routes');

module.exports = [
    {
        path: '/employees',
        routes: employeesRoutes
    },
    {
        path: '/login',
        routes: loginRoutes
    }
];