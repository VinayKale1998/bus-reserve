const trips = require("../model/tripsModel");
const tripRoutes = require("express").Router();
const moment = require("moment");
const busOwner = require("../model/busOwnerModel");
const { checkPresent } = require("../utils/Validation");
const { verifyToken } = require("../helpers/authController");

const { listOfTimes, buses } = require("../helpers/dummy");

tripRoutes.post("/createTrip", checkPresent, async (req, res) => {
  let { fromPlaceId, toPlaceId, date } = req.body;
  let times = listOfTimes(date);
  let tripsCreated = [];
  for (let i = 1; i < times.length; i++) {
    try {
      busDetails = await busOwner.findById(buses[i]);

      let trip = {
        from,
        to,
        date: moment(date).format("YYYY-MM-DD"),
        busOwnerID: busDetails._id,
        startTime: times[i],
        endTime: times[i].clone().add(9, "hours").add(30, "minutes"),
        category: busDetails.category,
        seatsBooked: ["1A", "2C"],
        bus_no: busDetails.bus_no,
        amenities_list: busDetails.amenities,
        busFare: 850,
        busName: busDetails.name,
      };

      try {
        let createdTrip = await trips.create(trip);
        tripsCreated.push(createdTrip);
      } catch (err) {
        return res.status(400).send({ message: err.message });
      }
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
  if (tripsCreated.length === 0)
    return res.status(500).send({ message: " something broke" });
  else return res.status(201).send({ message: "created", tripsCreated });
});

module.exports = tripRoutes;
