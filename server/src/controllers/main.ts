import { Request, Response } from "express";
import Car from "../models/car";

export const mainController = {
  getCar: async (req: Request, res: Response) => {
    const carId: string = req.params.id;
    try {
      const findCarId = await Car.findOne({carId});
      if (findCarId) {
        return res.status(200).json(findCarId);
      }
    } catch (err) {
      console.log(err);
    }
  },
};