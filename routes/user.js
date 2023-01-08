const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("All Users")
});

router.post("/login", (req, res) => {
    res.status(200).send("Logged In Successfully!");
});

module.exports = router;