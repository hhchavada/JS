const Users = require('../User.json');

exports.addUser = (req, res) => {
    console.log(req.body);
    const User = req.body;
    Users.push(User);
    res.status(201).json({message: 'User added successfully...'}) 
};

exports.getAllUser = (req, res) => {
    res.status(200).json(Users);
};

exports.getUser = (req, res) => {
    const id = +req.query.id;
    let User = Users.find((item)=> item.id === id);
    res.status(200).json(User);
};

exports.replaceUser = (req,res) =>{
    const id = +req.query.id;
    let UserIndex = Users.findIndex((item)=> item.id === id);
    let User = Users[UserIndex];
    Users.splice(UserIndex, 1,{...req.body});
    res.status(200).json({mwssage : 'User replace successfully'});

};

exports.updateUser= (req,res) =>{
    const id = +req.body.id;
    let UserIndex = Users.findIndex((item)=> item.id === id);
    let User = Users[UserIndex];
    let item = Users.splice(UserIndex,1,{...User, ...req.body});
    res.status(200).json({message : 'User update successfully'});
};

exports.deleteUser = (req, res) => {
    const id = +req.params.id;
    let UserIndex = Users.findIndex((item)=> item.id === id);
    let User = Users.splice(UserIndex,1);
    let item = Users.splice(UserIndex,1);
    res.status(200).json({mwssage : 'User delete successfully'});
};