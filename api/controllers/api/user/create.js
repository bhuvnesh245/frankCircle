module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      required: true,
      unique: true,
      type: 'string',
      isEmail: true,
    },
    password: {
      required: true,
      type: 'string',
      maxLength: 15,
      minLength: 6,
    },
  },


  exits: {
    invalid: {
      statusCode: 409,
      description: 'user create error' // this will not go in response
    },
  },


  fn: async function (inputs, exits) {

        var userRecord = await User.create({
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          password: inputs.password,
        });

        
      console.log(userRecord);

      if (userRecord == null) {

          return exits.invalid();
        // return exits.invalid({
        //   message: 'invalid, problem creating user'
        // });
      }

      return exits.success({
        message: 'User has been created successfully.',
        data: userRecord
      });

  }


};
