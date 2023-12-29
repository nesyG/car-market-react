import { Request, Response } from "express";
import Car from "../models/car";
import User from "../models/user"
import Listing from "../models/listing"
import {ObjectId} from 'mongodb';

export const mainController = {
  getCar: async (req: Request, res: Response) => {  
    const carId: string = req.params.id;  
    try {
      const findCarId = await Car.findOne({_id: new ObjectId(carId)});
      if (findCarId) {
        return res.status(200).json(findCarId);
      } else {
        return res.status(200).json('Car not found.')
      }
    } catch (err) {
      console.log(err);
    }
  },
  getUser: async (req: Request, res: Response) => {  
    const userId: string = req.params.id;
    try {
      const findUserId = await User.findOne({_id: new ObjectId(userId)});
      if (findUserId) {
        return res.status(200).json(findUserId);
      } else {
        return res.status(200).json('User not found.')
      }
    } catch (err) {
      console.log(err);
      return res.status(404).json('not found');
    }
  },
  getListing: async (req: Request, res: Response) => {  
    const listingId: string = req.params.id;
    try {
      const findListingId = await Listing.findOne({_id: new ObjectId(listingId)});
      if (findListingId) {
        return res.status(200).json(findListingId);
      } else {
        return res.status(200).json('Listing not found.');
      }
    } catch (err) {
      console.log(err);
      return res.status(404).json('not found');
    }
  },
};