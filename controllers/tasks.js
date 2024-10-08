const Task=require('../models/task')
const asyncWrapper=require('../middlewares/async')
const {createCustomError}=require('../errors/custom-error')

const getAllTasks=asyncWrapper( async (req,res)=>{
        const tasks=await Task.find({})
                //res.status(200).json({tasks:tasks})
                //When the key and value share the same name {tasks}==={tasks:tasks}
        res.status(200).json({tasks})
                //below two area also ways of sending data, but here do not use as fronted is designed to receive above response only
                // res.status(200).json({tasks,amount:tasks.length})
                // res.status(200).json({status:'success',data:{tasks,nbHits:tasks.length}})
})
const createTask=asyncWrapper( async(req,res)=>{
        const task=await  Task.create(req.body)
        res.status(201).json({task})
})
const getTask=asyncWrapper( async(req,res,next)=>{
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})
        if(!task){
           return next(createCustomError(`no such task is found with ${taskID} id`,404))
        }
        res.status(200).json({task:task})
})
const deleteTask=asyncWrapper( async(req,res,next)=>{
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
           return next(createCustomError(`no such task is found with ${taskID} id`,404)) 
        }
        // res.status(200).json({task})
        // res.status(200).send()
        res.status(200).json({task:null,status:'successful'})
})
const updateTask=asyncWrapper( async(req,res,next)=>{
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            runValidators:true,
            new:true
        })
        if(!task){
            return next(createCustomError(`no such task is found with ${taskID} id`,404)) 
        }
        res.status(200).json({task})
})
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}