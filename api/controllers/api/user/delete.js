module.exports = {


  friendlyName: 'Delete',


  description: 'Delete user.',


  inputs: {
    userId: {
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    var userRecord = await User.destroy({
      id: inputs.userId
      });
    return userRecord;

  }


};
