const mongoose = require('mongoose')
const mongoDBURl = 'mongodb+srv://mernApp-123:mernApp-123@mernapp.xpjas.mongodb.net/translate?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDBURl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected');

    } catch (error) {
        console.error('Database connect Failed')

    }
}

module.exports = connectDB;