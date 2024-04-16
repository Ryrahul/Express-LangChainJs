import express from "express";
import bodyParser from "body-parser";
import questionRoutes from "./routes/routes";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api/openai", questionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
