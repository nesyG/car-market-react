import mongoose, { Schema, Types } from "mongoose";

export interface IListing {
  user_id: Types.ObjectId;
  listing_id: string
  car_price: string;
}

const ListingSchema = new Schema<IListing>({
  user_id:  { 
    type: mongoose.Schema.Types.ObjectId, ref: "User", required: false
},
  listing_id: {
    type: String,
    required:false,
  },
  car_price: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IListing>("Listing", ListingSchema);