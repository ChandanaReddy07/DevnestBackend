const express = require('express');

const app = express();

//security , performance , edge cases
//CRUD -> POST ,GET, PUT ,DELETE
const slash = (req,res)=>{
    
    // res.sendStatus(200);//OK
   // res.sendStatus(201) //Updated
   //res.sendStatus(400) // 401 , 402.. bad request , client side se koi error
   //res.sendStatus(500) // server error
       res.json({a:1});
    //res.send("Hello");

}


// app.get("/ab+cd",sample); //abbbbbb..cd
// app.get("/ab?cd",sample); //acd or abcd
// app.get("/ab*cd",sample); //abcd or abrandomvaluescd

app.get("/user/:userid/topic/:title" , (req,res) => {
	res.send(req.params);
});

app.get('/',slash)

app.listen(5000);