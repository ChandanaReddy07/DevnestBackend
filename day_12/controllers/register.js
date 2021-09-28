
const User =require('../models/user')


const saltRounds =10;
const register = (req,res) =>{

    const { email , password }= req.body;

    try {
        const alreadyExists= await User.findOne({where :{email}})
        if(alreadyExists){
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser= new User({ email: email.lowerCase(),password: hash ,fullName: "Chandana"})
        const savedUser = await newUser.save();
        res.status(201).send("User registered!");
   
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong");
    }

}

module.exports= register;