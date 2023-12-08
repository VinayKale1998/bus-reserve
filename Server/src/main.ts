import express from "express";
import axios from "axios";
import cors from "cors";
import { PlacesAPi } from "../src/DataAccess/PlacesApi";
import { type IPlacesAPiResponse } from "../src/Abstractions/IplaceSuggestion";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.get("/api/suggestion", async (req, res) => {
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
app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
