module.exports = app => {
  const Cardetails = require("../controllers/carmatest.controller.js");

  var router = require("express").Router();

  // Create a new card
  router.post("/card-details", Cardetails.create);

  app.use("/api/", router);
};
