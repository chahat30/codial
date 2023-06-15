const express=require('express');
const cookieParser=require('cookie-parser');
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const app=express();
const port=8000;



app.use(express.urlencoded());
app.use(cookieParser());

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