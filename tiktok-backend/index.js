import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js";
// import Cors from 'cors'

// 8csCgrln91VCSXUs
// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
// app.use(Cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB config
const connection_url =
  "mongodb+srv://admin2:8csCgrln91VCSXUs@cluster0.ygmmgjs.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url);

//api endpoints

app.get("/", (req, res) => {
  res.status(200).send("hello ");
  //200 is ok
  //404 page not found
  //500 server error
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  // post request is to add data to the data base
  // it will let us add a video document to the videos collection
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener
app.listen(port, () => console.log(`listening on port ${port}`));
