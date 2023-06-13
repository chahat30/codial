module.exports.profile=function(req,res)
{
    res.end('<h1>User profile</h1>');
};

module.exports.signUp=function(req,res)
{
    res.render('user_sign_up',{
        title:"Codial | Sign Up"
    });
};

//render sign in page
module.exports.signIn=function(req,res)
{
    res.render('user_sign_in',{
        title:"Codial | Sign In"
    });
};

module.exports.create=function(req,res)
{

}

module.exports.create_session=function(req,res)
{
    
}