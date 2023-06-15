const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://chahat:Yg6qGWVQZc9p9qjB@cluster0.58wtuvn.mongodb.net/');
const db=mongoose.connection.on('connected', function() {
    console.log("Connected to DB")
});
module.exports=db;
