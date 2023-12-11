import express from "express";
import Trips from "../models/tripsModel";
import moment from "moment";
import { randomBytes } from "crypto";
import axios from "axios";
import cors from "cors";
import { PlacesAPi } from "../DataAccess/PlacesApi";
import { IPlacesAPiResponse } from "../Abstractions/IplaceSuggestion";
import dotenv from "dotenv";

const SuggestionRouter = express.Router();
SuggestionRouter.get("/retrieveSuggestions", async (req, res) => {
  const input = req.query.input;
  if (typeof input !== "string")
    return res.status(200).send({ message: "Invalid input" });
  const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&types=(cities)&components=country:IN&key=${process.env.GOOGLE_API_KEY}`;
  try {
    console.log("Inside pos");
    const response = await axios.get(apiUrl);
    if (response.data?.status == "OK") {
      try {
        const apiResponse: IPlacesAPiResponse = response.data;
        const parsedResponseObject = new PlacesAPi(apiResponse);
        const suggestions = parsedResponseObject.getSuggestions();
        return res.send(suggestions);
      } catch (err) {
        if (err instanceof Error)
          return res.status(500).send({ message: "Oops something went wrong" });
      }
    } else return res.status(200).send({ message: "No results" });
  } catch (err) {
    if (err instanceof Error)
      return res
        .status(500)
        .send({ message: "Oops something went wrong", depth: err.message });
  }
});

export default SuggestionRouter;
