const express = require("express");
const mainApp = express();
require("dotenv").config();
const tripRoutes = require("./routes/trips");
const signUpRoute = require("./routes/signup");
const { secureApp } = require("./utils/Security");
const redisRoute = require("./routes/redis");
const signInRoute = require("./routes/signin");

//wrapping the secureApp within the mainApp
mainApp.use(secureApp);
mainApp.use("/api/signup", signUpRoute);
mainApp.use("/api/signin", signInRoute);
mainApp.use("/api/trips", tripRoutes);
// mainApp.use("/api/redisConn", redisRoute);

const PORT = process.env.PORT || 3000;

mainApp.listen(PORT, (err) => {
  if (err) console.log(err.message);
  else console.log(`Server listening to port: ${PORT}`);
});
