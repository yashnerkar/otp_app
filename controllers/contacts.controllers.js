const contacts = require("../models/contacts");
const asyncHandler = require("express-async-handler");
// const data = require("../db.json");
const Vonage = require("@vonage/server-sdk");

exports.addContacts = asyncHandler(async (req, res, next) => {
  const { db } = req.body;
  const contact = await contacts.create(db);
  console.log(contact);
  res.status(201).json({
    success: true,
    data: contact,
  });
});

exports.getContacts = asyncHandler(async (req, res, next) => {
  const dbcontacts = await contacts.find();
  res.status(200).json({
    success: true,
    count: contacts.length,
    data: dbcontacts,
  });
});

exports.sendOtp = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const contact = await contacts.findOne({ id: id });
  const { otp } = req.body;
  const otpInt = otp.split(":")[1].trim();
  console.log(otpInt.length);
  const message = `Hi. Your otp is : ${otpInt}`;
  const vonage = new Vonage({
    apiKey: process.env.api_key,
    apiSecret: process.env.api_secret,
  });
  const from = "919999999999";
  const to = contact.phone.toString();
  const text = message;
  console.log(from, to, text);
  if (otpInt.length !== 6) {
    console.log("otp length is not 6");
    res.status(400).json({
      success: false,
      message: "Please enter a valid otp of 6 random digits!",
    });
  } else {
    vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.", responseData);
          contacts.findOneAndUpdate(
            { id: id },
            { otp: otpInt },
            { new: true },
            (err, doc) => {
              if (err) {
                console.log("Something wrong when updating data!");
              }
              console.log(doc);
            }
          );
          res.status(200).json({
            success: true,
            message: "OTP sent successfully!",
          });
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    });
  }
});

exports.sentOtpContacts = asyncHandler(async (req, res, next) => {
  const otpContactsList = await contacts.find({
    otp: { $exists: true, $ne: null },
  });
  res.status(200).json({
    success: true,
    count: otpContactsList.length,
    data: otpContactsList,
  });
});
