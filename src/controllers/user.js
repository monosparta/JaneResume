const { userService } = require("../services/index");
const jwt = require("jsonwebtoken");
const generalSignUp = async (req, res) => {
  try {
    if (
      (await userService.checkNameFormat(req.body.first_name)) ||
      (await userService.checkNameFormat(req.body.second_name)) ||
      (await userService.checkPasswordFormat(req.body.password)) ||
      (await userService.checkEmailFormat(req.body.email))
    ) {
      return res.status(400).json({
        detail: "欄位資料格式有誤",
      });
    }
    if (!(await userService.checkEmailExistsBySignUpEmail(req.body.email))) {
      return res.status(400).json({
        detail: "信箱已註冊過",
      });
    }
    const userSingUpState = await userService.createUser(
      req.body.first_name,
      req.body.second_name,
      req.body.email,
      req.body.password
    );
    return res.status(200).json({
      detail: "註冊成功，將在3秒後跳轉至登入頁面",
    });
  } catch (err) {
    return res.status(500).json({
      detail: "伺服器錯誤",
    });
  }
};
const generalSignIn = async (req, res) => {
  try {
    if (
      (await userService.checkPasswordFormat(req.body.password)) ||
      (await userService.checkEmailFormat(req.body.email))
    ) {
      return res.status(400).json({
        detail: "欄位資料格式有誤",
      });
    }
    if (
      (await userService.checkEmailExistsBySignUpEmail(req.body.email)) ||
      (await userService.checkPasswordCorrectBySignInEmail(
        req.body.email,
        req.body.password
      ))
    ) {
      return res.status(401).json({
        detail: "信箱或密碼輸入不正確",
      });
    }
    signInMemberInfo = await userService.useEmailGetMemberInfo(req.body.email);
    const token = jwt.sign(
      { user_id: signInMemberInfo.id, user_mail: signInMemberInfo.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    await userService.addToken(signInMemberInfo.id, token);
    return res.status(200).json({
      detail: "登入成功",
      token: token,
      name: signInMemberInfo.first_name + " " + signInMemberInfo.second_name,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      detail: "伺服器錯誤",
    });
  }
};
const anonymousSignIn = async (req,res) => {
  const anonymousUser=await userService.createAnonymousUser(
    "匿",
    "名",
  );
  const token = jwt.sign(
    { user_id: anonymousUser.id},
    process.env.SECRET_KEY,
  );
  await userService.addToken(anonymousUser.id, token);
  return res.status(200).json({
    detail: "登入成功",
    token: token,
    name: anonymousUser.first_name + " " + anonymousUser.second_name,
  });
};
const generalSignOut = async (req, res) => {
  try {
    await userService.deleteToken(req.tokenPayload.user_id);
    return res.status(200).json({
      detail: "登出成功",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      detail: "伺服器錯誤",
    });
  }
};
const getUserInfo = async (req, res) => {
  try {
    signInMemberInfo = await userService.useIdGetMemberInfo(
      req.tokenPayload.user_id
    );
    return res.status(200).json({
      detail: "獲取成功",
      name: signInMemberInfo.first_name + " " + signInMemberInfo.second_name,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      detail: "伺服器錯誤",
    });
  }
};
module.exports = {
  generalSignUp,
  generalSignIn,
  generalSignOut,
  getUserInfo,
  anonymousSignIn,
};
