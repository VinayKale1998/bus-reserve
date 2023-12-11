import express, { Request, Response, NextFunction } from "express";
import Trips from "../models/tripsModel";
import moment from "moment";
import { randomBytes } from "crypto";
export interface ISearchDetails {
  fromPlaceId: string;
  toPlaceId: string;
  date: string;
}

const checkPresent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { from, to, date } = req.body;

  if (date) {
    let dateIn = moment(date).format("YYYY-MM-DD");
    let tripsCreated: object[] = [];

    try {
      tripsCreated = await Trips.find({ date: { $eq: dateIn }, from, to });
      tripsCreated.push();
    } catch (err) {}

    if (tripsCreated.length == 0) return next();
    else {
      console.log("already present");
      console.log(randomBytes(256).toString("hex"));
      return res.status(201).send({ message: "trips created", tripsCreated });
    }
  }
};

const TripRouter = express.Router();

TripRouter.post("/createTrips", (req, res) => {
  let { fromPlaceId, toPlaceId, date }: ISearchDetails = req.body;

  console.log("inside trips");
  res.status(200).send({ date });
});

export default TripRouter;
