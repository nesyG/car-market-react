import * as fs from 'fs';
import express from "express";
import { connect } from "mongoose";
import passport from "passport";

const app = express();
const cors = require('cors'); 

//Extend Request interface for user
// declare module "express" {
//   export interface Request {
//     user?: any;
//   }
// }

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Body Parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Use cors middleware to enable CORS for all routes
app.use(cors());

//Connect To Database
// const dbConnectionString: string = process.env.DB_STRING || "";
// async function connectDB(): Promise<void> {
//   try {
//     await connect(dbConnectionString);
//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// }
// connectDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

//Routes for which the server is listening
app.get('/', (req, res) => {
  res.send({hello: 'Server'});
})

module.exports = app