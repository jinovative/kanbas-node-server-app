import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "../kanbas-react-web-app/src/Kanbas/courses/routes.js";
import ModuleRoutes from "../kanbas-react-web-app/src/Kanbas/Modules/routes.js";
import cors from "cors";

const app = express();
// const cors = require("cors");
app.use(cors());
app.use(express.json());

ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
