const Circle = require("../../../models/Circle");

module.exports = {


  friendlyName: 'Create',


  description: 'Create circle.',


  inputs: {
    buyInValue: {
      type: 'number',
      required: true,
    },
    buyInPrice: {
      type: 'number',
      required: true,
    },
    currentValue: {
      type: 'number',
      required: true,
    },
    currentPrice: {
      type: 'number',
      required: true,
    },
    userName : {
      type: 'string',
      required: true,
    },
    buyInPercentage : {
      type: 'number',
      required: true,
    }
  },


  exits: {
    invalid: {
      statusCode: 409,
      description: 'circle create error' // this will not go in response
    },
  },


  fn: async function (inputs, exits) {

        var circle = await Circle.create({
          buyInValue: inputs.buyInValue,
          buyInPrice: inputs.buyInPrice,
          currentValue: inputs.currentValue,
          currentPrice: inputs.currentPrice,
          userName: inputs.userName,
          buyInPercentage : inputs.buyInPercentage
        });

        
      console.log(circle);

      if (circle == null) {

          return exits.invalid();
        // return exits.invalid({
        //   message: 'invalid, problem creating user'
        // });
      }

      return exits.success({
        message: 'Circle has been created successfully.',
        data: circle
      });

  }



};
