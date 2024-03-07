const User = require('../model/user.model');

exports.adduser = async (req , res) => {
    try{
        const { firstName, lastName , email , password , age, gender} = req.body;
        console.log(req.body);
        let newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
            age,
            gender
        });
        newUser.save();
        res.status(201).json({user: newUser, message: 'User added successfully...'});
    } catch (err){
        console.log(err);
        res.status(500).json({message: 'Something went wrong...'});
    }
}

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
        let userId = req.query.userId;
        let user = await User.findById(userId);
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
    let userId = req.query.userId;
    let user =  await User.findById(userId);
    if ( !user ){
        return res.status(404).json("User Not Found");
    }
    user = await user.findOneAndUpdate({_id:user._id},{$set:{...req.body} },{new:true});
    res.status(200).json({user,message: 'user updated successfully....'});
}catch(err){
    console.log(err);
    res.status(500).json({message:'Server Error..!'});
}
};

exports.deleteUser =  async (req,res)=>{
   try{
       const userId= req.params.userId;
       const user = await User.findById(userId);
       if(!user){
           return res.status(404).json({message : "user not found....."} );
       }
       user = await user.findOneAndDelete({ _id: userId });
       res.status(200).json({user,message: 'user deleted successfully....'});
   } catch(err){
       console.log(err);
       res.status(500).json({ message: 'Server error!!' })
   }
};


