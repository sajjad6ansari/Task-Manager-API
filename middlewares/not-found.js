const notFound=(req,res)=>{
    res.status(404).send('route do not exist')
}
module.exports=notFound