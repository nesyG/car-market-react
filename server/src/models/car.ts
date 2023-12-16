import mongoose, { Schema, Types } from "mongoose";

export interface ICar {
  _id: Schema.Types.ObjectId,
  car_model: string;
  car_model_year: string;
  car_color: string;
}

const CarSchema = new Schema<ICar>({
  _id: Schema.Types.ObjectId,
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

const CarModel = mongoose.model<ICar>('Car', CarSchema);
export default CarModel