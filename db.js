const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/myapp';

// Options to pass to MongoDB driver during connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false // For deprecation warning
};

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Export mongoose instance (optional, you can use mongoose directly elsewhere)
module.exports = mongoose;
