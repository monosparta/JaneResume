const db = require("../models/index");
const getAllMessage = async () => {
  const messages = await db["Messages"].findAll({
    attributes: ["user_id", "description", "createdAt"],
  });

  return messages;
};
const addMessage = async (userId, description) => {
  await db["Messages"].create({
    user_id: userId,
    description: description,
  });
};
const checkUseridFormat = async (user_id) => {
  return !user_id;
};
const checkDescriptionFormat = async (description) => {
  return !description;
};
module.exports = {
  getAllMessage,
  addMessage,checkUseridFormat,checkDescriptionFormat
};
