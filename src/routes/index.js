const express = require("express");
const router = express.Router();
const { userController } = require("../controllers/index");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post("/api/signup", userController.signUp);
module.exports = router;
