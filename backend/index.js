require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/User");
const cors = require("cors");

const app = express();
const port = 2468;
//biult in middleware
app.use(express.json());
app.use(cors());
console.log(process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL)
  .then((result) => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// custom middleware for logging

/*app.use((req, res, next) => {
  console.log(`${req.method}request made to ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("welcome to backend");
});
app.get("/kodex", (req, res) => {
  res.send("This IS MY First BackEnd");
});*/

//create
// const userCreate = async () => {
//   const user = new User({ name: "leky" });
//   await user.save();
// };
// userCreate();

// // read
// const getUser = async () => {
//   const users = await User.find();
//   console.log(users);
// };
// getUser();

// update
// const updateUser = async () => {
//   const user = await User.findByIdAndUpdate("6a5632f43a1aa2a4756c4f86", {
//     age: 19,
//     Course: "FullStack",
//   });
// };
// updateUser();

// //delete
// const deleteUser = async () => {
//   await User.findByIdAndDelete("6a5632f43a1aa2a4756c4f86");
// };
// deleteUser();
const userRoute = require("./routes/userRoutes");
app.use("/users", userRoute);

app.listen(process.env.port, () => {
  console.log(`app running on port ${port}`);
});

// mongodb://adegokeomosowon00_db_user:Az4WgDDQL6cl1bjL@ac-a741bfm-shard-00-00.fj2swvc.mongodb.net:27017,ac-a741bfm-shard-00-01.fj2swvc.mongodb.net:27017,ac-a741bfm-shard-00-02.fj2swvc.mongodb.net:27017/?ssl=true&replicaSet=atlas-odejb0-shard-0&authSource=admin&appName=Cluster0
