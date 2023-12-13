import mongoose, { Schema, Types } from "mongoose";

export interface ICar {
  car_model: string;
  car_model_year: string;
  car_color: string;
}

const CarSchema = new Schema<ICar>({
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
});

const carModel = mongoose.model<ICar>('Car', CarSchema);
export default carModel