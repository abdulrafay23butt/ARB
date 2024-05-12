const express = require("express");
const router = express.Router();
const {login} = require("../controller/usercontroller");

router.use(express.json());

router.post("/", login);

module.exports = router;
