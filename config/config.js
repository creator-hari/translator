const mongoose = require('mongoose')
const mongoDBURl = process.env.DBURL;

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