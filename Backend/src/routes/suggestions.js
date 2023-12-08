import { PlacesAPi } from "../DataAccess/PlacesApi";
const dotenv = require("dotenv");
const axios = require("axios");
const suggestionRoute = require("express").Router();

dotenv.config();

suggestionRoute.get("/", async (req, res) => {
  const input = req.query.input;
  const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&types=(cities)&components=country:IN&key=${process.env.GOOGLE_API_KEY}`;

  try {
    console.log("Inside pos");
    const response = await axios.get(apiUrl);
    if (response.data?.status == "OK") {
      try {
        const parsedResponse = PlacesAPi(response);
        return res.send(parsedResponse);
      } catch (err) {
        return res
          .status(500)
          .send({ message: "Oops something went wrong", depth: err.message });
      }
    } else
      return res.status(500).send({ message: "Oops something went wrong" });
  } catch (error) {
    return res.status(500).send({ message: "OOps something went wrong" });
  }
});

module.exports = suggestionRoute;
