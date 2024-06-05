const { connect, connection } = require('mongoose');

// Connecting to the MongoDB database using the MongoDB URI provided in the environment
// variables or using the default URI if the environment variable is not set
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/socialNetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// connect(connectionString);

module.exports = mongoose.connection
