module.exports = (sequelize, Sequelize) => {
  const Carddetails = sequelize.define("carddetails", {
    name: {
      type: Sequelize.STRING
    },
    cardNumber: {
      type: Sequelize.STRING
    },
    expiryDate: {
      type: Sequelize.STRING
    },
    cvv: {
      type: Sequelize.STRING
    }
  });

  return Carddetails;
};
