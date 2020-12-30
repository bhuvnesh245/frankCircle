const Circle = require("../../../models/Circle");

module.exports = {


  friendlyName: 'Update',


  description: 'Update circle.',


  inputs: {
    userName : {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    var updatedCircle = await Circle.update({
                                      id: inputs.userName
                                      }).set({
                                        buyInValue: inputs.buyInValue,
                                        buyInPrice: inputs.buyInPrice,
                                        currentValue: inputs.currentValue,
                                        currentPrice: inputs.currentPrice,
                                        buyInPercentage : inputs.buyInPercentage
                                      });
    return updatedCircle;

  }


};
