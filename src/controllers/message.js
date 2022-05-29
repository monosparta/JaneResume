const { messageService, userService } = require("../services/index");

const getAllMessage = async (req, res) => {
  try {
    const messages = await messageService.getAllMessage();

    const token = req.headers.authorization;
    const userId =
      token == "Basic null" || typeof req.headers.authorization == undefined
        ? ""
        : await userService.tokenGetMemberId(token.split(" ")[1]);
    return res.status(200).json({
      detail: "成功取得所有留言內容",
      messages: [...messages.values()],
      userid: userId ? userId.id : "",
    });
  } catch (err) {
    return res.status(500).json({
      detail: "伺服器錯誤",
    });
  }
};

const addMessage = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (
      (await messageService.checkIdentityFormat(req.body.identity)) ||
      (await messageService.checkDescriptionFormat(req.body.description))
    ) {
      return res.status(400).json({
        detail: "欄位資料格式有誤",
      });
    }
    if (req.body.identity == 1) {
      const userId =
        token == "Basic null"
          ? ""
          : await userService.tokenGetMemberId(token.split(" ")[1]);
      if (userId) {
        await messageService.addMessage(userId.id, req.body.description);
        return res.status(200).json({
          detail: "成功新增留言",
        });
      } else {
        return res.status(403).json({
          detail: "權限錯誤",
        });
      }
    } else {
      await messageService.addMessage(null, req.body.description);
      return res.status(200).json({
        detail: "成功新增留言",
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
    }

    return res.status(403).json({
      detail: "權限錯誤",
    });
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
};
