
import mongoose, { Schema, Types } from "mongoose";
import CarModel, { ICar } from './car';
import User, { IUser } from './user';


export interface IListing {
    user_id: Types.ObjectId | IUser;
    price: string;
    car: Types.ObjectId | ICar; 
  }

const ListingSchema = new Schema<IListing>({
    user_id:  { 
      type: mongoose.Schema.Types.ObjectId, ref: "User", required: false
  },
    price: {
      type: String
    },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  });
  
  const ListingModel = mongoose.model<IListing>('Listing', ListingSchema);
  export default ListingModel
  