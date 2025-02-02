const express = require("express");
const router = express.Router();
const urlController = require("../Controller/urlController");

router.post("/shorten", urlController.shortenUrl);
router.get("/stats/:shortUrl", urlController.getUrlStats);

module.exports = router;
