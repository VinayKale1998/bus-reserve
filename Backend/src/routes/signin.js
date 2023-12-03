// const { verifyUser } = require("../helpers/authController");
const Users = require("../model/userModel");
const UserProfile = require("../model/userProfileModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signInRoute = require("express").Router();

signInRoute.post("/", async (req, res) => {
  let { username, password } = req.body;

  try {
    let user = await Users.findOne({ username: username });

    if (user !== null) {
      let passwordIsValid = bcrypt.compareSync(password, user.password);
      console.log(passwordIsValid);
      if (!passwordIsValid) {
        return res.status(401).send({ message: "password incorrect" });
      } else {
        try {
          let userDetails = await UserProfile.findOne({ userId: user._id });

          let token = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: 86400,
            algorithm: "HS384",
          });

          return res.status(200).send({
            user: {
              id: user._id,
              email: userDetails.email,
              firstname: userDetails.firstname,
              lastname: userDetails.lastname,
            },
            message: "login successfull",
            accessToken: token,
          });
        } catch (err) {
          return res.status(500).send({ message: "Oops something broke!" });
        }
      }
    } else {
      return res
        .status(401)
        .send({ message: "User not present, please register" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Oops something broke!" });
  }
});

module.exports = signInRoute;
