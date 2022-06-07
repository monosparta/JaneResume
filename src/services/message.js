const db = require("../models/index");
const { Op } = require("sequelize");

const getAllMessage = async () => {
  const now = new Date();
  let allMessages = await db["Messages"].findAll({
    order: [["createdAt", "DESC"]],
    include: db["Users"],
  });
  allMessages = allMessages.map((message) => {
    return message.dataValues;
  });
  allMessages.forEach((message) => {
    if (now - message.createdAt <= 1000 * 60) {
      message.createdAt = "剛剛";
    } else {
      message.createdAt = message.createdAt.toLocaleString("en-US");
    }
  });
  return allMessages;
};
const countMessage = async () => {
  const countMessage = await db["Messages"].count();
  return countMessage;
};
const searchMessage = async (message) => {
  const now = new Date();
  let searchMessages = await db["Messages"].findAll({
    order: [["createdAt", "DESC"]],
    where: {
      description: {
        [Op.substring]: message,
      },
    },
    include: db["Users"],
  });
  searchMessages = searchMessages.map((message) => {
    return message.dataValues;
  });
  searchMessages.forEach((message) => {
    if (now - message.createdAt <= 1000 * 60) {
      message.createdAt = "剛剛";
    } else {
      message.createdAt = message.createdAt.toLocaleString("en-US");
    }
  });
  return searchMessages;
};
const countSearchMessage = async (message) => {
  const countMessage = await db["Messages"].count({
    where: {
      description: {
        [Op.substring]: message,
      },
    },
  });
  return countMessage;
};
const checkMessageIdExist = async (messageId) => {
  const messages = await db["Messages"].findOne({ where: { id: messageId } });
  return messages == null ? true : false;
};

const addMessage = async (userId, description) => {
  const messageId = await db["Messages"].max("id");

  await db["Messages"].create({
    id: messageId + 1,
    user_id: userId,
    description: description,
  });
};
const updateMessage = async (userId, messageId, description) => {
  const update = await db["Messages"].update(
    { description: description },
    {
      where: {
        id: messageId,
        user_id: userId,
      },
    }
  );
  return update[0] ? true : false;
};
const deleteMessage = async (userId, messageId) => {
  await db["Messages"].destroy({
    where: {
      id: messageId,
      user_id: userId,
    },
  });
};
const checkIdentityFormat = async (identity) => {
  return identity == "";
};
const checkDescriptionFormat = async (description) => {
  return !description;
};
const checkMessageidFormat = async (messageId) => {};
const checkUseridFormat = async (userid) => {
  return userid == "";
};
module.exports = {
  getAllMessage,
  addMessage,
  checkIdentityFormat,
  checkDescriptionFormat,
  checkMessageidFormat,
  updateMessage,
  deleteMessage,
  checkUseridFormat,
  checkMessageIdExist,
  countMessage,
  searchMessage,
  countSearchMessage,
};
