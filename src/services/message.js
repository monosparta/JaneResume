const db = require("../models/index");
const getAllMessage = async () => {
  const allMessages = await db["Messages"].findAll({ include: db["Users"] });
  // allMessages = allMessages.map((message) => {
  //   return message.dataValues;
  // });
  // console.log(allMessages)
  // allMessages.forEach((message) => {
  //   if (seat.state === seatProperties.state.IDLE_TOO_LONG) {
  //     const stateChangedAt = new Date(seat.stateChangedAt);
  //     const current = new Date();
  //     const minutes = parseInt(
  //       (current.getTime() - stateChangedAt.getTime()) / (1000 * 60) + 30
  //     );
  //     seat.idleMinutes = minutes;
  //   } else {
  //     seat.idleMinutes = 0;
  //   }
  // });
  return allMessages;
};
const checkMessageIdExist = async (messageId) => {
  const messages = await db["Messages"].findOne({ where: { id: messageId } });
  return (messages==null)?true:false;
};

const addMessage = async (userId, description) => {
  if (userId != null) {
    await db["Messages"].create({
      user_id: userId,
      description: description,
    });
  } else {
    await db["Messages"].create({
      description: description,
    });
  }
};
const updateMessage = async (userId, messageId, description) => {
  const update=await db["Messages"].update(
    { description: description },
    {
      where: {
        id: messageId,
        user_id: userId,
      },
    }
  );
  return update[0]?true:false;
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
const checkMessageidFormat = async (messageId) => {
};
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
};
