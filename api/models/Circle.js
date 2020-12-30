/**
 * Circle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

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
      buyInPercentage: {
        type: 'number',
      },
      userName : {
        type: 'string',
        required: true,
        unique : true
      }
  },
  fetchRecordsOnUpdate: true,
};

