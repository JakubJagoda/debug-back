const users = [
    {
        id: 1,
        login: 'john',
        password: '123',
        type: 'regular'
    },
    {
        id: 2,
        login: 'admin',
        password: 'admin',
        type: 'admin'
    }
];

module.exports = {
    checkCredentials(login, password) {
        const foundUser = users.find((user) => user.login === login);

        if (!foundUser) {
            throw new Error();
        } else if (foundUser.password !== password) {
            throw new Error();
        } else {
            return foundUser;
        }
    }
};