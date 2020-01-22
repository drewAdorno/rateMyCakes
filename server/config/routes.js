controller= require('../controllers/controllers.js');

module.exports=(app)=>
{
    app.get('/cakes', (req, res) => 
    {
        controller.allCakes(req,res);
    });

    app.get('/cake/:id', (req, res) => 
    {
        controller.cake(req,res);
    });

    app.post('/cake', (req, res) => 
    {
        controller.postCake(req,res);
    });
}