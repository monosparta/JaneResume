const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { userService } = require("../services/index");
const users = {};

// 新增google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const userId=await userService.findOrcreateGoogleUser(
        profile._json.sub,
        profile._json.family_name,
        profile._json.given_name,
        profile._json.email
      );
      profile._json.id = userId;
      if (profile._json) {
        const id = profile._json.sub;
        users[id] = profile._json;
        //使用者資料存在req內，回傳到後面
        return done(null, users[id]);
      }
      //失敗回傳false

      return done(null, false);
    }
  )
);

// 這邊簡單來說就是簡化存在session內的資料，session存放使用者id
// 再用使用者id找出詳細資料
passport.serializeUser((user, done) => {
  return done(null, user.sub);
});
passport.deserializeUser((userId, done) => {
  const user = users[userId];
  return done(null, user);
});

module.exports = passport;
