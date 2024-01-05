module.exports = function(app){
//get request
    app.get('/todo', function(req, res){
        res.render('todo');
    });
};
//post request
app.post('/todo', function(req, res){
        
});

//delete request

app.delete('/todo', function(req, res){
        
});