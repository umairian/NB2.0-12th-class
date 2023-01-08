const { Router } = require("express");
const controllers = require("../controllers/shop");

const authenticateUser = require("../middlewares/authenticateUser");

const router = Router();

router.get("/", authenticateUser, controllers.getAllShops);

router.post("/", controllers.createNewShop);

module.exports = router;