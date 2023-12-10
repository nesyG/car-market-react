import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerified?: boolean;
  uniqueString?: string;
}

const UsersSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: { type: Boolean, default: false},
  uniqueString: {
    type: String,
  },
});

// Password hash middleware

// UsersSchema.pre("save", async function (next) {
//   // check if password is present and is modified.
//   try {
//     if (this.password && this.isModified("password" as string)) {
//       this.password = await bcrypt.hash(this.password, 10);
//     }
//     next();
//   } catch (err) {
//     console.log(err);
//   }
// });


// Helper method for validating users password
UsersSchema.methods.comparePassword = function comparePassword(
  candidatePassword: string,
  cb: Function
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

//Generate jwt
// UsersSchema.methods.generateJWT = function () {
//   const today = new Date();
//   const expirationDate = new Date(today);
//   expirationDate.setDate(today.getDate() + 60);

//   let payload = {
//     id: this._id,
//     email: this.email,
//     firstName: this.firstName,
//     lastName: this.lastName,
//   };

//   return jwt.sign(payload, process.env.JWT_SECRET);
// };

export default mongoose.model<IUser>("User", UsersSchema);