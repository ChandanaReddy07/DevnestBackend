const {Sequalize}= require("sequelize");


const sequelize=new Sequalize(
    "postgres",
    "postgres",
    "123456789",
    {
        host: "localhost",
        dialect:"postgres"
    }
    
);

Sequalize.sync();

(async ()=>{
    
    try{
        await Sequalize.authenticate();
        console.log("Connection established with DB")
    }catch(err){
        console.error("Unable to connect DB");
    }
})();

module.exports = sequelize