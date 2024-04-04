import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";

import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";

import UserRoutes from "./Users/routes.js";
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
app.use(cors());
app.use(express.json());

UserRoutes(app);

ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
