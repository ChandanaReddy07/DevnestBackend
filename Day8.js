const express = require('express');

const app = express();

const chckadmin=(req,res,next) => {
    console.log("in first")
    if(req.query.admin == true){
        next();
    }else{
        res.status(400).send("should be admin")
    }

}

//if want to use in all the url
//app.use(chckadmin);

app.get("/" ,chckadmin , (req,res) => {
	res.status(200);
    res.json(req.query)
} );



app.listen(5000);