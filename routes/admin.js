const express = require("express")
const path = require('path')
const router = express.Router();
const rootDir = require('../util/path')
const productsController = require("../controllers/product")

router.get("/add-product", productsController.getAddProducts)
router.post("/product", productsController.postAddProducts);

exports.routes = router;
// module.exports = product;