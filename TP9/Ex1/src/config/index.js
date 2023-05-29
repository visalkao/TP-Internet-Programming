const { default: mongoose } = require("mongoose")


module.exports = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/iptp9',{
        autoIndex: true,
        serverSelectionTimeoutMS: 30000
        })
        console.log("Mongoose Connected");
    }catch(err){
        console.log(err);
    }
}