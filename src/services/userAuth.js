const db = require("../models/index");
const checkUserToken = async (userId, token) => {
  const userToken = await db["Users"].findOne({
    where: {
      id: userId,
    },
  });
  return userToken.dataValues.token === token;
};
module.exports = {
  checkUserToken,
};
