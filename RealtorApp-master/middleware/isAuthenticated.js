module.exports = function(req, res, next){

 //if user logs in continue to next page   
if(req.user){
    return next();
}

//to be adjust for route back if user does not log in
return res.redirect("/")
}