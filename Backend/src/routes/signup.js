const User = require("../model/userModel");
const UserProfile = require("../model/userProfileModel");
const bcrypt = require("bcrypt");
const signUpRoute = require("express").Router();
const { body, validationResult } = require("express-validator");
const {
  presenceValidator,
  reqSanityValidator,
} = require("../utils/Validation");

//main signup endpoint
signUpRoute.post("/", [reqSanityValidator, presenceValidator], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ message: errors.array() });
  }
  const { username, password, role, firstname, lastname, email } = req.body;

  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        console.log("Error hashing password", err);
        return res.status(500).send({ message: "Oops! something broke" });
      } else {
        const userData = {
          username,
          password: hash,
          role,
        };

        try {
          const user = await User.create(userData);
          const userId = user._id;
          const userProfData = {
            userId,
            firstname,
            lastname,
            email,
          };
          await UserProfile.create(userProfData);
          res.status(201).send({ message: "Account created successfully" });
        } catch (err) {
          res.status(400).send({ message: err.message });
          return;
        }
      }
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
    return;
  }
});

module.exports = signUpRoute;
