const user = require('./user');
const message = require('./message');
const userAuth = require('./userAuth');

module.exports = {
    userService: user,
    messageService:message,
    userAuthService:userAuth
}