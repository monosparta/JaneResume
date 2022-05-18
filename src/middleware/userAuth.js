const jwt = require("jsonwebtoken");

const userJWT = async (req, res, next) => {
  if (!(req.headers.authorization)) {
    return res.status(403).json({
      detail: "沒有攜帶令牌",
    });
  } else {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      try {
        if (err) {
          return res.status(403).json({
            detail: "授權錯誤",
          });
        } else {
          req.tokenPayload = decoded;
          next();
        }
      } catch (err) {
        return res.status(403).json({
          detail: "伺服器錯誤",
        });
      }
    });
  }
};
module.exports = {
  userJWT,
};
