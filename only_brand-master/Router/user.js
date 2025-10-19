const express = require("express");
const usrcontrollers = require("../controllers/user.js");
const router = express.Router();

router.post("/api/users/register", usrcontrollers.register);
router.post("/api/users/login", usrcontrollers.login);

module.exports = router;
