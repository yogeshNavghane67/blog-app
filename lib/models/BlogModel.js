import mongoose, { model } from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
    description:{
        type:string,
        required:true
    },
    Category:{
        type:string,
        required:true
    },
    author:{
        type:string,
        required:true
    },
    image:{
        type:string,
        required:true
    },
    authorImg:{
        type:string,
        required:true
    },
    date:{
        type:string,
        default:Date.now()
    }
})

const BlogModel = mongoose.models.blog || mongoose.Model('blog',Schema);

export default BlogModel;