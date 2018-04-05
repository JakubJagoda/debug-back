const express = require('express');
const router = express.Router();
const _ = require('lodash');

const loginModule = require('./login');

router.post('/', (req, res, next) => {
    const login = req.body.login;
    const password = req.body.password;

    let result;
    try {
        result = loginModule.checkCredentials(login, password);
    } catch (e) {
        res.status(401).send();
        return;
    }

    res.status(200).send(_.omit(result, 'password'));
});

module.exports = router;