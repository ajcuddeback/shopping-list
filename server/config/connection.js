const mongoose = require('mongoose');

mongoose.connect(process.env.MONGDB_URI || 'mongodb://localhost/shoppinglist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;