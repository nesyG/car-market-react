import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/user";
import  CarModel  from '../models/car';
import  ListingModel  from '../models/listing';

export const mockController = {
    mockData: async (req: Request, res: Response) => {
        try {
            console.log('ok')
            if (req.params.type == "create") {
                const newUser: object = {
                    _id: new mongoose.Types.ObjectId(),
                    firstName: 'test',
                    lastName: 'test1',
                    email: 'igvoic.work@gmail.com',
                    password: 'test123',
                }

    
                const newCar: object = {
                    _id: new mongoose.Types.ObjectId(),
                    car_model: 'Ford',
                    car_model_year: '1994',
                    car_color: 'green',
                }

                const user = new User(newUser);
                await user.save().catch(error => console.error('Error saving user:', error));
                const userId = user._id;

                const car = new CarModel(newCar);
                await car.save().catch(error => console.error('Error saving user:', error));
                const carId = car._id;
              console.log(carId)

                const newListing: object = {
                    user: '657a2e9218556b4f3f9b9cd2', 
                    price: '1100$',
                    car: '657a2e9218556b4f3f9b9cd4'
                }

                const listing = new ListingModel(newListing);
                console.log(listing)
                await listing.save().catch(error => console.error('Error saving user:', error));;

                return res.status(200).json({
                    message: "Mock creating completed."
                })
            } else if (req.params.type == "delete") {
                await User.deleteOne();
                await ListingModel.deleteOne();
                await CarModel.deleteOne();
                return res.status(200).json({
                    message: "Mock deleting completed."
                })
            }
        } catch (err) {
            res.json(err);
        }
    }
}
