const moongoose=require("mongoose");
const userSchema=new moongoose.Schema({
    name:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true,
        unique:true
    },

    Password:{
        type:String,
        required:true,
    }
})
module.exports=moongoose.model("User",userSchema)
