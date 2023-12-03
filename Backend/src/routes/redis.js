// const redisRoute = require("express").Router();
// const { redis } = require("../utils/Security");

// //setting a value to redis
// redisRoute.post("/set-key-value", async (req, res) => {
//   const { key, value } = req.body;

//   try {
//     await redis.set(key, value);
//     console.log("key value pair set in redis");
//     return res.status(201).send({ key, value });
//   } catch (err) {
//     return res.status(500).send({ message: "Oops! something broke" });
//   }
// });

// //getting a value from redis
// redisRoute.get("/get-key-value", async (req, res) => {
//   const { key } = req.body;

//   try {
//     const value = await redis.get(key);
//     console.log("key value pair retrieved via redis");
//     return res.status(201).send({ key, value });
//   } catch (err) {
//     return res.status(500).send({ message: "failed to get the given value" });
//   }
// });

// module.exports = redisRoute;
