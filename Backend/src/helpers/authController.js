const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../model/userModel");
const UserProfile = require("../model/userProfileModel");

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "BEARER"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.SECRET,
      async (err, decode) => {
        if (err) {
          (req.user = undefined), next();
        }
        console.log(decode);
        try {
          const user = await Users.findOne({ _id: decode.id });

          const userDetails = await UserProfile.findOne({ userId: decode.id });

          req.user = {
            id: user._id,
            email: userDetails.email,
            firstname: userDetails.firstname,
            lastname: userDetails.lastname,
          };

          next();
        } catch (err) {
          return res.status(500).send({ message: err.message });
        }
      }
    );
  } else {
    res.status(403).send({ message: "Unauthorized" });
  }
};

module.exports = { verifyToken };
