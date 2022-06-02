const jwt = require("jsonwebtoken");
const { userService } = require("../services/index");

const handleSuccess = async (req, res) => {
  const token = jwt.sign(
    { user_id: req.user.id, user_mail: req.user.email },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  await userService.addToken(req.user.id, token);
  res.set({
    token: token,
    name: req.user.family_name + " " + req.user.given_name,
  });
  // return res.status(200).json({
  //   token: token,
  //   name: req.user.family_name + " " + req.user.given_name,
  // });
  res.redirect("http://localhost:3001/");
};

module.exports = { handleSuccess };
