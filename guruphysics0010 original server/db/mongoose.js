var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    family: 4
};

mongoose.connect(process.env.MONGODB_URI, options);

module.exports = {mongoose};
