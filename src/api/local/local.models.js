const mongoose = require('mongoose');



const localSchema = new mongoose.Schema({ 
    
    
    name: { type: 'string'},
    image: { type: 'string'}


});
module.exports = mongoose.model('local', localSchema)
