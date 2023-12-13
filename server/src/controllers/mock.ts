import { Request, Response } from "express";
import User from "../models/user";
import  CarModel  from '../models/car';
import  ListingModel  from '../models/listing';

export const mockController = {
    mockData: async (req: Request, res: Response) => {
        try {
            if (req.params.type == "create") {
                const newUser: object = {
                    firstName: 'test',
                    lastName: 'test1',
                    email: 'igvoic.work@gmail.com',
                    password: 'test123',
                }

                const user = new User(newUser);
                await user.save();
                const userId = user._id;

                const newCar: object = {
                    car_model: 'Ford',
                    car_model_year: '1994',
                    car_color: 'green',
                }

                const car = new CarModel(newCar);
                await car.save().catch(error => console.error('Error saving user:', error));;

                const newListing: object = {
                    user_id: userId, 
                    car_price: '1100$',
                    car: car,
                }

                const listing = new ListingModel(newListing);
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
