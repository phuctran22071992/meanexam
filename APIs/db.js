const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
    if(!err){
        console.log('mongodb conection succeeded');
    }else{
        console.log('error in db connection:: '+ JSON.stringify(err,undefined,2));
    }
})

module.exports = mongoose;