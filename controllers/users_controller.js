
const User=require('../models/user');

module.exports.profile=function(req,res)
{
    return res.render('user_profile',{
        title:"codial | profile"
    });
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

//get the sign up data
module.exports.create=function(req,res)
{
    if(req.body.password!=req.body.confirm_password)
    {
        return res.redirect('back');
    }
  User.find({email:req.body.email})
    .exec()
    .then((user) => {
        if(user.length===0)
        {
            console.log(req.body);
            User.create(req.body);
            return res.redirect('/users/sign_in');
        }
        else
        {
            return res.redirect('back');
        }
    })
    .catch(err => {
        console.log("error in finding user in signing up");
        return;
    })
  
}

module.exports.create_session=function(req,res)
{
    
}

//Yg6qGWVQZc9p9qjB