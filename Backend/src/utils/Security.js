const express = require("express");
const rateLimit = require("express-rate-limit");
const Redis = require("ioredis");
const helmet = require("helmet");
const mongoose = require("mongoose");
const secureApp = express();
const cors = require("cors");
secureApp.use(cors());
//connecting with mongoose
try {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}.mktz8ju.mongodb.net/RedBus?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log("Connected to the DB");
} catch (err) {
  console.log(err.message);
}

//connecting to redis

// const redis = new Redis({
//   host: "localhost",
//   port: 6379,
// });

// const redisStore = {
//   incr: (key, cb) => {
//     redis.incr(key, (err, value) => {
//       if (err) {
//         cb(err);
//       } else {
//         cb(null, value);
//       }
//     });
//   },
//   decrement: (key) => {
//     redis.decr(key);
//   },
//   resetKey: (key) => {
//     redis.del(key);
//   },
// };

// const limiter = rateLimit({
//   store: redisStore,
//   windowMs: 60 * 15 * 1000,
//   max: 100,
// });

//adding parsing and security m
secureApp.use(express.json());
// secureApp.use(limiter);
secureApp.use(helmet());
// module.exports = { redis, secureApp };
module.exports = { secureApp };
