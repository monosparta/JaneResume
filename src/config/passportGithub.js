// const passport = require('passport')
// const GitHubStrategy  = require('passport-github').Strategy
// const users = {}
// // 新增google Strategy
// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: process.env.GITHUB_CALLBACK_URL
//     },
//     (accessToken, refreshToken, profile, done) => {
// // profile._json內存放妳向google要的使用者資料
//       if (profile._json) {
//         const id = profile._json.sub
//         users[id] = profile._json
        
//         //使用者資料存在req內，回傳到後面
//         return done(null, users[id])
//       }
//       //失敗回傳false
//       return done(null, false)
//     }
//   )
// )

// // 這邊簡單來說就是簡化存在session內的資料，session存放使用者id
// // 再用使用者id找出詳細資料
// passport.serializeUser((user, done) => {
//   return done(null, user.sub)
// })
// passport.deserializeUser((userId, done) => {
//   const user = users[userId]
//   return done(null, user)
// })

// module.exports = passport