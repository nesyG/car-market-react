import mongoose, { Schema, Types } from "mongoose";

export interface IListing {
  user_id: Types.ObjectId;
  listing_id: string
  car_price: string;
}

const UsersSchema = new Schema<IListing>({
  user_id:  { 
    type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
},
  listing_id: {
    type: String,
    required:true,
  },
  car_price: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IListing>("Listing", UsersSchema);