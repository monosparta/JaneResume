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
const useEmailGetMemberInfo = async (email) => {
  const MemberInfo = await db["Users"].findOne({
    where: { email: email },
  });
  return MemberInfo.dataValues;
};
const useIdGetMemberInfo = async (id) => {
  const MemberInfo = await db["Users"].findOne({
    where: { id: id },
  });
  return MemberInfo.dataValues;
};
const tokenGetMemberId = async (token) => {
  const memberId = await db["Users"].findOne({
    where: { token: token },
  });
  return memberId.dataValues;
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
  await db["Users"].create({
    first_name: first_name,
    second_name: second_name,
    email: email,
    password: bcrypt.hashSync(password, 10), // 密碼加密
  });
};
const createAnonymousUser=async(first_name,second_name)=>{
  const anonymousUser=await db["Users"].create({
    first_name: first_name,
    second_name: second_name
  });
  return anonymousUser.dataValues
}
const findOrcreateGoogleUser = async (
  social_id,
  first_name,
  second_name,
  email
) => {
  const [user, created] = await db["Users"].findOrCreate({
    where: { social_id: social_id },
    defaults: {
      social_id: social_id,
      first_name: first_name,
      second_name: second_name,
      email: email,
    },
  });
  return user.id
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
  useEmailGetMemberInfo,
  createUser,
  checkNameFormat,
  checkEmailFormat,
  checkPasswordFormat,
  addToken,
  deleteToken,
  useIdGetMemberInfo,
  tokenGetMemberId,
  findOrcreateGoogleUser,createAnonymousUser
};
