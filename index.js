const express=require('express');
//const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
const expressLayouts=require('express-ejs-layouts');
const app=express();
const port=8000;

mongoose.connect('mongodb+srv://chahat:Yg6qGWVQZc9p9qjB@cluster0.58wtuvn.mongodb.net/');
mongoose.connection.on('connected', function() {
    console.log("Connected to DB")
});

app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles',true);  //extract css file of <%-body%> to put it in head
app.set('layout extractScripts',true);

app.use('/',require('./routes/index')); //use express router

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err)
{
    if(err)
    {
        console.log(`error in running server: ${err}`);
    }
    console.log(`server is running on port :${port}`);
});