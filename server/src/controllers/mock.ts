import { Request, Response } from "express";
import User from "../models/user";
import Listing from "../models/listing";
import Car from "../models/car";

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

                const newListing: object = {
                    car_price: '1100$',
                }

                const newCar: object = {
                    car_model: 'Ford',
                    car_model_year: '1994',
                    car_color: 'green',
                }

                const user = new User(newUser);
                await user.save();

                const listing = new Listing(newListing);
                await listing.save();

                const car = new Car(newCar);
                await car.save();

                return res.status(200).json({
                    message: "Mock creating completed."
                })
            }
            else if (req.params.type == "delete") {
                await User.deleteMany();
                await Listing.deleteMany();
                await Car.deleteMany();
                return res.status(200).json({
                    message: "Mock deleting completed."
                })
            }
        } catch (err) {
            res.json(err);
        }
    }
}