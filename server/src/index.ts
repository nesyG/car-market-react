import * as fs from 'fs';
import express from "express";
import { connect } from "mongoose";
import passport from "passport";

const app = express();

//Extend Request interface for user
declare module "express" {
  export interface Request {
    user?: any;
  }
}

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
//require("./config/passport")(passport);

//Body Parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Passport middleware
// app.use(passport.initialize());
// require("./middleware/jwt")(passport);

//Connect To Database
const dbConnectionString: string = process.env.DB_STRING || "";
async function connectDB(): Promise<void> {
  try {
    await connect(dbConnectionString);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
connectDB();

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

//Routes for which the server is listening
//app.use("/", loginRoutes);