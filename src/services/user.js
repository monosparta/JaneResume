const db = require("../models/index");

const checkEmailExistsBySignUpEmail = async (email) => {
  const existsEmails = await db["Users"].findAll({ where: { email: email } });
  return existsEmails == "" ? 1 : 0;
};
const checkNameFormat = async (name) => {};
const checkPasswordFormat = async (password) => {};
const checkEmailFormat = async (email) => {};
const createUser = async (userData) => {
  await db["Users"]
    .create(userData)
    .then((result) => {
      return result; // 成功回傳result結果
    })
    .catch((err) => {
      return err;
    });
};

module.exports = {
  checkEmailExistsBySignUpEmail,
  createUser,
  checkNameFormat,
  checkEmailFormat,
  checkPasswordFormat,
};
