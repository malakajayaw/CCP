const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventRegistration = new Schema({
    
    eventId: {
        type: String
    },  
    formData: {
        type: Array,
    },
    responder: {
        type: String,
    },
    state:{
        type:Boolean,
        default:false
    },
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    contactNo:{
        type: String,
    },

});


module.exports = mongoose.model('EventRegistration', EventRegistration);