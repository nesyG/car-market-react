import mongoose, { Schema, Types } from "mongoose";
import Car, {ICar } from "./car"

export interface IListing {
  user_id: Types.ObjectId;
  price: string;
  car: ICar; 
}

const ListingSchema = new Schema<IListing>({
  user_id:  { 
    type: mongoose.Schema.Types.ObjectId, ref: "User", required: false
},
  price: {
    type: String,
    required: true,
  },
  car: Car,
});

export default mongoose.model<IListing>("Listing", ListingSchema);