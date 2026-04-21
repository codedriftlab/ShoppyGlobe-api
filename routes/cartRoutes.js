const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const auth = require("../middleware/auth");

// add to cart
router.post("/", auth, async (req, res) => {
  const item = new Cart({
    userId: req.user.id,
    productId: req.body.productId,
    quantity: req.body.quantity
  });

  await item.save();
  res.send("Added to cart");
});

// update
router.put("/:id", auth, async (req, res) => {
  await Cart.findByIdAndUpdate(req.params.id, {
    quantity: req.body.quantity
  });
  res.send("Updated");
});

// delete
router.delete("/:id", auth, async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;