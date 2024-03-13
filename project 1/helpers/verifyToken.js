const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req, res, next) => {
    const authorization = req.headers['authorization'];
    if(authorization === undefined){
        return res.json({meassage : 'authorization not defind'});
        }
        let token = authorization.split(" ")[1];
        if(token === undefined)
           return res.status(401).json({meassage : 'unauthorization'});
        else{
            let {userId} = jwt.verify(token,'harsh');
            let user = await User.findById(userId);
            if(user){
                req.user = user;
                next();
            }else{
                return res.status(401).json({meassage : 'invalid user'});
            
            }
        }
};