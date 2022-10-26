const router = require("express").Router();
const { modelNames } = require("mongoose");
const {
  getContacts,
  addContacts,
  sendOtp,
  sentOtpContacts,
} = require("../controllers/contacts.controllers");

router.route("/contacts").post(addContacts);
router.route("/contacts/:id").post(sendOtp);
router.route("/otplogs").get(sentOtpContacts);
module.exports = router;
