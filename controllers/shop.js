const getAllShops = (req, res) => {
    res.status(200).send({
        shops: "All Shops"
    });
}

const createNewShop = (req, res) => {
    console.log(req.body)
    res.status(200).send("New shop created");
}

module.exports = {
    getAllShops,
    createNewShop
}