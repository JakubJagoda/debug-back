const faker = require('faker');
const _ = require('lodash');

let employees = _.times(1000, (id) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
        id,
        firstName,
        lastName,
        login: faker.internet.userName(firstName, lastName),
        email: faker.internet.email(firstName, lastName)
    }
});

const employeeScores = employees.map(({id}) => {
    return {
        id,
        score: Math.round(Math.random() * 1000)
    };
});

module.exports = {
    getEmployees() {
        return employees;
    },
    updateEmployee(employee) {
        if (!employee) {
            return 404;
        }

        const employeeToUpdate = _.find(employees, {id: employee.id});

        if (!employeeToUpdate) {
            return 404;
        }

        Object.assign(employeeToUpdate, employee);

        return 204;
    },
    deleteEmployee(id) {
        const employeeToDelete = _.find(employees, {id});

        if (!employeeToDelete) {
            return 404;
        }

        employees = employees.filter(w => w !== employeeToDelete);

        return 204;
    },
    getEmployeeScores() {
        return _.shuffle(employeeScores);
    }
};