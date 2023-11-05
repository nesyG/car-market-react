"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });
// Passport config
//require("./config/passport")(passport);
//Body Parsing
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Passport middleware
// app.use(passport.initialize());
// require("./middleware/jwt")(passport);
//Connect To Database
const dbConnectionString = process.env.DB_STRING || "";
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)(dbConnectionString);
            console.log("MongoDB Connected");
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
    });
}
connectDB();
//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});
//Routes for which the server is listening
//app.use("/", loginRoutes);
