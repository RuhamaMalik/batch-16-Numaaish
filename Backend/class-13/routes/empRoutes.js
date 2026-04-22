const express = require('express');
const { createEmploy } = require('../controller/empController');

const router = express.Router();

router.route("/")
.post(createEmploy)



// router.route("/:id")

module.exports = router;