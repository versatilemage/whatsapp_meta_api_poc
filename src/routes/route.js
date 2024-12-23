const express = require("express");
const WhatsappController = require("../controllers/Whatsapp.controller");

const router = express.Router();

router.get("/", WhatsappController.VerifyToken);
router.post("/", WhatsappController.ReceiveMessage);

module.exports = router;
