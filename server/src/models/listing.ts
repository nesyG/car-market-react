
import mongoose, { Schema, Types } from "mongoose";

export interface IListing {
    user: Types.ObjectId;
    price: string;
    car: Types.ObjectId; 
  }

const ListingSchema = new Schema<IListing>({
    user:  { 
      type: mongoose.Schema.Types.ObjectId, ref: "User", required: false
  },
    price: {
      type: String
    },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  });
  
  const ListingModel = mongoose.model<IListing>('Listing', ListingSchema);
  export default ListingModel
  