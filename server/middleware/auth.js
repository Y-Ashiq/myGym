import jwt from 'jsonwebtoken'


const userAuth = (req,res,next) => {
    let token = jwt.verify(req.headers.token ,'mySecretToken');

    if(token){
        next()
    }else{
        res.json({message:"you are not allowed in this section"})
    }

    
}
export default userAuth