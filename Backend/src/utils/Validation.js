const Users = require("../model/userModel");
const UserProfile = require("../model/userProfileModel");
const trips = require("../model/tripsModel");
const { body } = require("express-validator");
const moment = require("moment");
const { randomBytes } = require("crypto");
const presenceValidator = async (req, res, next) => {
  //checking if the username is already present in User collection,
  //if not present,checking if the email is present in the user profile collection
  // if either of them are present, we immediately send a 400 response to the user
  //if neither are present, we continue with the signUp flow
  const { username, email } = req.body;

  try {
    const userNamePresent = await Users.findOne({ username });
    if (userNamePresent)
      return res.status(400).send({ message: "Username taken" });
    else {
      try {
        const emailPresent = await UserProfile.findOne({ email });
        if (emailPresent)
          return res.status(400).send({ message: "Email already in use" });
      } catch (err) {
        res.status(500).send("Oops Something broke!");
      }
    }
  } catch (err) {
    res.status(500).send("Oops Something broke!");
  }

  return next();
};

//using express-validator to check whether the req fields are within  the field  constraints
const reqSanityValidator = [
  body("username").not().isEmpty().withMessage("username is required"),
  body("username")
    .isString()
    .isLength({ min: 4, max: 20 })
    .withMessage("Length should we within the range of 4-20 chars"),

  body("password").not().isEmpty().withMessage("password is required"),
  body("password").isString().isLength({ min: 5, max: 20 }),
  body("email").isEmail().withMessage("Email invalid"),
];

//checking whether trips are present for the day already, if yes, fetch them and return it to te
const checkPresent = async (req, res, next) => {
  console.log("passed user :", req.user);
  const { from, to, date } = req.body;

  if (date) {
    let dateIn = moment(date).format("YYYY-MM-DD");
    let tripsCreated = [];

    try {
      tripsCreated = await trips.find({ date: { $eq: dateIn }, from, to });
      tripsCreated.push();
    } catch (err) {}

    if (tripsCreated.length == 0) return next();
    else {
      console.log("already present");
      console.log(randomBytes(256).toString("hex"));
      return res.status(201).send({ message: "trips created", tripsCreated });
    }
  }
};

module.exports = { presenceValidator, reqSanityValidator, checkPresent };
