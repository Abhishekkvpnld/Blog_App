import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./config/DbConnection.js";
import userRoute from "./routes/user_route.js";
import postRoute from "./routes/post_route.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5174"],
  })
);

//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server Running...");
});

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT} 🚀🚀`);
  });
});
