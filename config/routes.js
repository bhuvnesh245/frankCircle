/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/circle' : {controller : 'CircleController', action : 'getCircle', view :'circle'} ,
  'POST /api/v1/user/create': { action: 'api/user/create' },
  'PATCH /api/v1/user/update/:userId': { action: 'api/user/update' },
  'GET /api/v1/user/index': { action: 'api/user/index' },
  'DELETE /api/v1/user/delete:userId': { action: 'api/user/delete' },
  '/circle/update' : {controller : 'CircleController', action : 'updateCircle'} ,

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
