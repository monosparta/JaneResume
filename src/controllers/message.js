const { messageService, userService } = require("../services/index");

const getAllMessage = async (req, res) => {
  try {
    const messages = await messageService.getAllMessage();
    const countMessage = await messageService.countMessage();
    const token = req.headers.authorization;

    const userId =
      token == "Basic null" ||
      typeof req.headers.authorization == undefined ||
      token == undefined
        ? ""
        : await userService.tokenGetMemberId(token.split(" ")[1]);
    return res.status(200).json({
      detail: "成功取得所有留言內容",
      messages: [...messages.values()],
      userid: userId ? userId.id : "",
      count: countMessage,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      detail: "伺服器錯誤",
    });
  }
};
const searchMessage = async (req, res) => {
  try {
    const messages = await messageService.searchMessage(req.body.message);
    const countMessage = await messageService.countSearchMessage(
      req.body.message
    );
    const token = req.headers.authorization;

    const userId =
      token == "Basic null" ||
      typeof req.headers.authorization == undefined ||
      token == undefined
        ? ""
        : await userService.tokenGetMemberId(token.split(" ")[1]);
    return res.status(200).json({
      detail: "成功取得指定留言內容",
      messages: [...messages.values()],
      userid: userId ? userId.id : "",
      count: countMessage,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      detail: "伺服器錯誤",
    });
  }
};
const addMessage = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (await messageService.checkDescriptionFormat(req.body.description)) {
      return res.status(400).json({
        detail: "欄位資料格式有誤",
      });
    }
    if (token) {
      const userId = await userService.tokenGetMemberId(token.split(" ")[1]);
      await messageService.addMessage(userId.id, req.body.description);
      return res.status(200).json({
        detail: "成功新增留言",
      });
    } else {
      return res.status(403).json({
        detail: "請先登入",
      });
    }
  } catch (err) {
    return res.json({
      detail: "伺服器錯誤",
    });
  }
};
const updateMessage = async (req, res) => {
  try {
    if (
      (await messageService.checkUseridFormat(req.tokenPayload.user_id)) ||
      (await messageService.checkDescriptionFormat(req.body.description)) ||
      (await messageService.checkMessageidFormat(req.body.message_id))
    ) {
      return res.status(400).json({
        detail: "欄位資料格式有誤",
      });
    }

    if (await messageService.checkMessageIdExist(req.body.message_id)) {
      return res.status(400).json({
        detail: "留言不存在",
      });
    }
    if (
      await messageService.updateMessage(
        req.tokenPayload.user_id,
        req.body.message_id,
        req.body.description
      )
    ) {
      return res.status(200).json({
        detail: "成功更新留言",
      });
    } else {
      return res.status(403).json({
        detail: "權限錯誤",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      detail: "伺服器錯誤",
      err: err,
    });
  }
};
const deleteMessage = async (req, res) => {
  const message_id = req.params.id;
  try {
    if (
      (await messageService.checkUseridFormat(req.tokenPayload.user_id)) ||
      (await messageService.checkMessageidFormat(message_id))
    ) {
      return res.status(400).json({
        detail: "欄位資料格式有誤",
      });
    }
    if (await messageService.checkMessageIdExist(message_id)) {
      return res.status(400).json({
        detail: "留言不存在",
      });
    }
    await messageService.deleteMessage(req.tokenPayload.user_id, message_id);
    return res.status(200).json({
      detail: "成功刪除留言",
    });
  } catch (err) {
    return res.json({
      detail: "伺服器錯誤",
    });
  }
};
module.exports = {
  getAllMessage,
  addMessage,
  updateMessage,
  deleteMessage,
  searchMessage,
};
