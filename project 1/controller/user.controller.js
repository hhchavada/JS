const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req , res) => {
    try{
        const { firstName, lastName , email , password , age, gender} = req.body;
        let user = await User.findOne({email: email, isDelete : false});
        if(user){
            return res.status(400).json({message: 'user already exist...'});
        }
        let hashPassword = await bcrypt.hash(password,10);
         user = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            age,
            gender
        });
        user.save();
        res.status(201).json({user: user, message: ' new User add ...'});
    } catch (err){
        console.log(err);
        res.status(500).json({message: 'Something went wrong...'});
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email, isDelete: false});
        if(!user){
            return res.status(404).json({message: 'user not found...'});
        }
        let checkPassword = await bcrypt.compare(req.body.password, user.password);
        if (!checkPassword) {
            return res.status(400) .json({ message:'Invalid Password..!'})
    }
    let token = jwt.sign({userId: user._id},'harsh');
    res.status(200).json({token,message: 'login successfully'});
} 
catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server Error..!'});
   }
};

exports.getAllUsers = async (req, res) => {
    try{
        let users = await User.find();
        res.status(200).json(users);
    } catch (err){
        console.log(err);
        res.status(500).json({message: 'internal server error...'});
    }
};

exports.getusers =  async (req , res ) => {
    try{
        let userId = req.user._id;
        let user = await User.findOne({_id: userId, isDelete : false});
        if(!user){
            return res.status(404).json({message : "user not found....."} );
        }
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"})
    }
};

exports.updateuser = async (req, res) => {
    try{
    let userId = req.user._id;
    let user =  await User.findById(userId);
    if ( !user ){
        return res.status(404).json("User Not Found");
    }
    user = await User.findOneAndUpdate({_id:user._id},{$set:{...req.body} },{new:true});
    res.status(200).json({user,message: 'user updated successfully....'});
}catch(err){
    console.log(err);
    res.status(500).json({message:'Server Error..!'});
}
};

exports.deleteUser =  async (req,res)=>{
   try{
       const userId= req.user._id;
       const user = await User.findById(userId);
       if(!user){
           return res.status(404).json({message : "user not found....."} );
       }
       user = await User.findOneAndDelete({ _id: userId });
       res.status(200).json({user,message: 'user deleted successfully....'});
   } catch(err){
       console.log(err);
       res.status(500).json({ message: 'Server error!!' })
   }
};


