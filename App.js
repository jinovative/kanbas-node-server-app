import cors from "cors";
import express from "express";

import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";

import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";

<<<<<<< HEAD
import UserRoutes from "./Users/routes.js";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
  })
);
app.use(express.json());

=======

const app = express();


app.use(cors());
app.use(express.json());



>>>>>>> c8122167960a53d1fa4658bbf80cdc754e782cde
ModuleRoutes(app);
CourseRoutes(app);

UserRoutes(app);

Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
