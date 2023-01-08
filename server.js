const express = require("express");

const port = 4000;

const app = express();

// Parsing request body
app.use(express.urlencoded());
app.use(express.json());

// Configuring templating engine
app.set("view engine", "ejs");

require("./models/connection");

// Routers
const userRouter = require("./routes/user");
const shopRouter = require("./routes/shop");
const studentRouter = require("./routes/student");

app.get("/", (req, res) => {
    res.status(200).render("index.ejs", {
        message: "Welcome to the Home Page!"
    });
});

app.use("/users", userRouter);
app.use("/shops", shopRouter);
app.use("/students", studentRouter);

app.use((req, res) => {
    res.status(404).render("404.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})