const user = require("./user");
const message = require("./message");
const social=require('./social')
module.exports = {
  userController: user,
  messageController:message,
  socialController:social
};