const {CustomAPIError}=require('../errors/custom-error')

const errorHandlerMiddleware=(err,req,res,next)=>{
    // return res.status(500).json({msg:err})
    // console.log(err)
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:`someting went wrong, try again`})
}
module.exports=errorHandlerMiddleware