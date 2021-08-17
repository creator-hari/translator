const mongoose = require('mongoose')
const langSchema = new mongoose.Schema({
    q: {
        type: String,
    },

    translations: {
        type: Array,
    },
    // target: {
    //     en: {
    //         type: String
    //     },
    //     kn: {
    //         type: String
    //     },
    //     hi: {
    //         type: String
    //     },
    //     ta: {
    //         type: String
    //     },
    //     te: {
    //         type: String
    //     },
    // }
});

const Lang = mongoose.model('lang', langSchema);
module.exports = Lang;