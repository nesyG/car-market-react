import mongoose, { Schema, Types } from "mongoose";

export interface ICar {
  car_model: string;
  car_model_year: string;
  car_color: string;
  user_id: Types.ObjectId;
}

const UsersSchema = new Schema<ICar>({
  car_model: {
    type: String,
    required: true,
  },
  car_model_year: {
    type: String,
    required: true,
  },
  car_color: {
    type: String,
    required: true,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<ICar>("Car", UsersSchema);