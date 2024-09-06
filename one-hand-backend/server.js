import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import { APP_PORT, DB_URL } from "./config";
import cors from "cors";
import errorHandler from "./services/errorHandler";
import { generate } from "./ngo_data/generateNgo";

const app = express();
app.use(cors())

// database connection
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", ()=> console.log("error"));
db.once("open", ()=> console.log("connected"));

const appPort = process.env.PORT || 5000

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("home page");
})

app.use("/api/v1", routes)
app.get("/api/generate", generate)
app.use("/uploads", express.static("uploads"))



app.use(errorHandler)


app.listen(appPort, ()=> console.log(`Listening to port ${APP_PORT}`));