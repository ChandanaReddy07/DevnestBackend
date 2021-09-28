const {DataTypes} = require('sequalize');
const sequalize = require('../database');


const User = sequalize.define('User',{
    fullName: {
        type: DataType.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }
})


module.exports=User