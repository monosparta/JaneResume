const express = require("express");
const router = express.Router();
const passportGoogle = require("../config/passportGoogle");
// const passportGithub = require("../config/passportGithub");

const { userController,messageController,socialController } = require("../controllers/index");
const userAuth=require("../middleware/userAuth")
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get(
  "/auth/google",
  passportGoogle.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/auth/google/callback",
  passportGoogle.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/login",
  })
);

// router.get(
//   "/auth/github",
//   passportGithub.authenticate("github", { scope: ["user"] })
// );
// router.get(
//   "/auth/github/callback",
//   passportGithub.authenticate("github", {
//     successRedirect: "/success",
//     failureRedirect: "/login",
//     session: false,
//   })
// );
router.get("/success",socialController.handleSuccess);
router.post("/api/signup", userController.generalSignUp);
router.post("/api/general/signin", userController.generalSignIn);
router.get("/api/anonymous/signin", userController.anonymousSignIn);

router.use("/api/auth",userAuth.userJWT)
router.get("/api/auth/userinfo", userController.getUserInfo);

router.get("/api/auth/signout", userController.generalSignOut);

router.get("/api/message", messageController.getAllMessage);
router.post("/api/searchmessage", messageController.searchMessage);

router.post("/api/message", messageController.addMessage);
router.put("/api/auth/message", messageController.updateMessage);
router.delete("/api/auth/message/:id", messageController.deleteMessage);

module.exports = router;
