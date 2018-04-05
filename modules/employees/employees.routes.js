const express = require('express');
const router = express.Router();

const employees = require('./employees');

router.get('/', (req, res, next) => {
    res.status(200).send(employees.getEmployees());
});

router.put('/:id', (req, res, next) => {
    const result = employees.updateEmployee(req.body.employee);
    res.status(result).send();
});

router.delete('/:id', (req, res, next) => {
    const result = employees.deleteEmployee(parseInt(req.params.id, 10));
    res.status(result).send();
});

router.get('/scores', (req, res, next) => {
    res.status(200).send(employees.getEmployeeScores());
});

module.exports = router;