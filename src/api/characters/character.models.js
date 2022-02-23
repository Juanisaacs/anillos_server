const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema({ 
    name: { type: 'string'},
origin: { type: 'string'},
arma: { type: 'string'},
tipo: { type: 'string'},
image: { type: 'string'}


});
const Character = mongoose.model('character', characterSchema)
module.exports = Character;