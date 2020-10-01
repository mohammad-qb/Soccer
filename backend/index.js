import express from "express";
import mongoose from "mongoose";
import routes from "./routes/soccerRouters";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
routes(app);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Listinign on http://localhost:${PORT}`));
