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
const updateMessage = async (userId, messageId, description) => {
  await db["Messages"].update(
    { description: description },
    {
      where: {
        id: messageId,
        user_id: userId,
      },
    }
  );
};
const deleteMessage = async (userId, messageId) => {
  await db["Messages"].destroy({
    where: {
      id: messageId,
      user_id: userId,
    },
  });
};
const checkUseridFormat = async (userId) => {
  return !userId;
};
const checkDescriptionFormat = async (description) => {
  return !description;
};
const checkMessageidFormat = async (messageId) => {
  return !messageId;
};
module.exports = {
  getAllMessage,
  addMessage,
  checkUseridFormat,
  checkDescriptionFormat,
  checkMessageidFormat,
  updateMessage,
  deleteMessage,
};
