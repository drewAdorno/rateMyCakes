const collections = require('../models/models');

const cake=collections.cake;
const review=collections.review;

module.exports = 
{
    renderIndex: function(req,res)
    {
      res.render("index.html"); 
    },
    allCakes: function(req, res)
    {
        cake.find()
            .then(data => res.json({status: "success", cakes:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    cake: function(req, res)
    {
        cake.findOne({_id: req.params.id})
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    postCake: function(req, res)
    {
        const cake=new cake();
        cake.cakeName=req.body.cakeName;
        cake.bakerName=req.body.bakerName;
        cake.url=req.body.url;
        cake.save()
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    }
    
};