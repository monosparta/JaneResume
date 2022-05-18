const db = require("../models/index");
const bcrypt = require("bcrypt");

const checkEmailExistsBySignUpEmail = async (email) => {
  const existsEmails = await db["Users"].findAll({ where: { email: email } });
  return existsEmails == "" ? 1 : 0;
};
const checkPasswordCorrectBySignInEmail = async (email, password) => {
  const comparePassword = await db["Users"].findOne({
    where: { email: email },
  });
  const compareResult = bcrypt.compareSync(
    password,
    comparePassword.dataValues.password
  );
  return !compareResult;
};
const getMemberInfo = async (email) => {
  const MemberInfo = await db["Users"].findOne({
    where: { email: email },
  });
  return MemberInfo.dataValues;
};
const checkNameFormat = async (name) => {
  return !name;
};
const checkPasswordFormat = async (password) => {
  return !password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};
const checkEmailFormat = async (email) => {
  return (
    !email ||
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  );
};
const createUser = async (first_name, second_name, email, password) => {
  await db["Users"]
    .create({
      first_name: first_name,
      second_name: second_name,
      email: email,
      password: bcrypt.hashSync(password, 10), // 密碼加密
    })
};
const addToken = async (userId, token) => {
  await db["Users"].update(
    { token: token },
    {
      where: {
        id: userId,
      },
    }
  );
};
const deleteToken = async (userId) => {
  await db["Users"].update(
    { token: null },
    {
      where: {
        id: userId,
      },
    }
  );
};
module.exports = {
  checkEmailExistsBySignUpEmail,
  checkPasswordCorrectBySignInEmail,
  getMemberInfo,
  createUser,
  checkNameFormat,
  checkEmailFormat,
  checkPasswordFormat,
  addToken,
  deleteToken,
};
