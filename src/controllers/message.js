const { messageService } = require("../services/index");

const getAllMessage = async (req, res) => {
  try {
    const messages = await messageService.getAllMessage();
    return res.status(200).json({
      detail: "成功取得所有留言內容",
      data: [...messages.values()],
    });
  } catch (err) {
    return res.json({
      detail: "伺服器錯誤",
    });
  }
};

const addMessage = async (req, res) => {
  try {
    if (
      (await messageService.checkUseridFormat(req.tokenPayload.user_id)) ||
      (await messageService.checkDescriptionFormat(req.body.description))
    ) {
      return res.status(400).json({
        detail: "欄位資料格式有誤",
      });
    }
    await messageService.addMessage(
      req.tokenPayload.user_id,
      req.body.description
    );
    return res.status(200).json({
      detail: "成功新增留言",
    });
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
    await messageService.updateMessage(
      req.tokenPayload.user_id,
      req.body.message_id,
      req.body.description
    );
    return res.status(200).json({
      detail: "成功更新留言",
    });
  } catch (err) {
    return res.json({
      detail: "伺服器錯誤",
    });
  }
};
const deleteMessage = async (req, res) => {
  try {
    if (
      (await messageService.checkUseridFormat(req.tokenPayload.user_id)) ||
      (await messageService.checkMessageidFormat(req.body.message_id))
    ) {
      return res.status(400).json({
        detail: "欄位資料格式有誤",
      });
    }
    await messageService.deleteMessage(
      req.tokenPayload.user_id,
      req.body.message_id,
    );
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
};
