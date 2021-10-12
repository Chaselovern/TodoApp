const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 8000;

const todoRoutes = require("./routes/todo");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/todoapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
})
.then(() => {
    console.log("DADABASE CONNECTION ACQUIRED");
});

app.use(cors());

app.use(bodyParser.json());

app.use("/api", todoRoutes);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});