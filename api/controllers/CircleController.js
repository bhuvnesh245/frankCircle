/**
 * CircleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
 
    
    getCircle : async function(req , res){

        let circle = await Circle.find({userName : req.params.userName});

        if(circle.length > 0){
            return res.view('pages/circle',{data : circle[0]});
        }
        return res.badRequest(`User ${req.params.userName} not found`);
    },

       
    updateCircle : async function(req , res){

        let circle = await Circle.update({
            id: req.params.userName
            }).set({
              buyInPercentage : req.params.buyInPercentage
            });

        if(circle.length > 0){
            return res.send(circle[0]);
        }
        return res.badRequest(`User ${req.params.userName} not found`);
    }

};

