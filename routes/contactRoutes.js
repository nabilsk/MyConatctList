const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "get all the contacts" });
});
router.route("/").post((req, res) => {
  res.status(200).json({ message: "contact created" });
});
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: "contact upated" });
});
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: "contact upated" });
});
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: "contact deleted" });
});

module.exports = router;
