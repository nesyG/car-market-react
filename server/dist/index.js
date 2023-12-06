"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var cors = require('cors');
//Extend Request interface for user
// declare module "express" {
//   export interface Request {
//     user?: any;
//   }
// }
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });
//Body Parsing
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
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
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
//Server Running
app.listen(process.env.PORT, function () {
    console.log("Server is running at ".concat(process.env.PORT));
});
//Routes for which the server is listening
app.get('/', function (req, res) {
    res.send({ hello: 'Server' });
});
//# sourceMappingURL=index.js.map