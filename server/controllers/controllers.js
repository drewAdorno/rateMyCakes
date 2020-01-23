const collections = require('../models/models');

const Cake=collections.cake;
const Review=collections.review;

module.exports = 
{
    renderIndex: function(req,res)
    {
      res.render("index.html"); 
    },
    allCakes: function(req, res)
    {
        Cake.find()
            .then(data => res.json({status: "success", cakes:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    cake: function(req, res)
    {
        Cake.findOne({_id: req.params.id})
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    },
    postCake: function(req, res)
    {
        console.log(req.body);
        Cake.create(req.body)
            .then(data => res.json({status: "success", cake:data}))
            .catch(err => res.json({ status: "Error", message: err }));  
    }
    
};