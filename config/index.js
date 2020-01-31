if(process.env.NODE_EN != "production"){
    require('dotenv').config()
}
module.exports={
    MONGO_URI:"mongodb+srv://S4NAdmin:S4NAdmin@s4ntest-dtujr.mongodb.net/test?retryWrites=true&w=majority"
   // MONGO_URI:"mongodb://0.0.0.0:27017/thepolyglotdeveloper"    //process.env.MONGO_URI
}