const encrypt = require('../lib/encryption').encrypt; 
const db = require("../models");
const Card = db.card;
const Op = db.Sequelize.Op;
const Luhn = require('luhn-js');

// Create and Save a new Card
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Please insert a name on Card!"
    });
    return;
  }

  if (!req.body.name) {
    res.status(400).send({
      message: "Please insert a name on Card!"
    });
    return;
  }
  if( (!req.body.cardNumber) || (req.body.cardNumber.length < 16 ))    {
    res.status(400).send({
      message: "invalid card number"
    });
    return;
   }

   if( (!req.body.cvv) || (req.body.cvv.length > 4 ) )    {
    res.status(400).send({
      message: "invalid CVV"
    });
    return;
   }
   
   // checking with Luhan Algorithm
   let cardValid = Luhn.isValid(req.body.cardNumber)
   console.log(cardValid)

  // Create a Card
  const cardDetails = {
    name: req.body.name,
    cardNumber: encrypt(req.body.cardNumber),
    expiryDate: req.body.expiryDate,
    cvv: encrypt(req.body.cvv)
  };

  // Save cardDetails in the database
  Card.create(cardDetails)
    .then(data => {
      res.send({"message":"Your card details has been saved"});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Card Details."
      });
    });
};
