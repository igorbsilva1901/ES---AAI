import express, { urlencoded } from "express";
import routes from "./Routes/routes";
import testRoute from "./Routes/testRoute";
import cors from "cors";

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(testRoute);
app.use(routes);

app.listen(3000, () => {
    console.log("Server online at port 3000");
})