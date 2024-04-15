import express from "express";
import bodyParser from "body-parser";
import questionRoutes from "./routes/routes.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use("/", questionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
