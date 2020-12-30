module.exports = {


  friendlyName: 'Update',


  description: 'Update user.',


  inputs: {

    userId: {
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    var updatedUser = await User.update({
                                      id: inputs.userId
                                      }).set({
                                            firstName: inputs.firstName,
                                            lastName: inputs.lastName,
                                            email: inputs.email,
                                            password:inputs.password
                                      });
    return updatedUser;

  }


};
