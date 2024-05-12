const express = require("express");
const router = express.Router();
const {register} = require("../controller/usercontroller");

router.use(express.json());

router.post("/", register);

module.exports = router;
