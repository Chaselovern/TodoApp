const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const port = 8000;

const todoRoutes = require("./routes/todo");

const app = express();

mongoose.connect("mongodb+srv://chaseLovern:GGLO0xRaXSMDkgvz@cluster0.edve9.mongodb.net/todoapp?retryWrites=true&w=majority", {
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