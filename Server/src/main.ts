import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import TripRouter from "./Routes/TripRouter";
import SuggestionRouter from "./Routes/SuggestionRouter";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/suggestions", SuggestionRouter);
app.use("/api/trips", TripRouter);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
