const { userService } = require("../services/index");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const signUp = async (req, res) => {
  try {
    if (!(await userService.checkEmailExistsBySignUpEmail(req.body.email))) {
      return res.status(400).json({
        detail: "信箱已註冊過",
      });
    }
    const insertValues = {
      first_name: req.body.first_name,
      second_name: req.body.second_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10), // 密碼加密
    };
    const userSingUpState = await userService.createUser(insertValues);
    return res.status(200).json({
      detail: "註冊成功",
    });
  } catch (err) {
    return res.json({
      detail: err,
    });
  }
};

module.exports = {
  signUp,
};
