// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error(err.stack);
  
    // Set a default status code and message for the error
    let statusCode = 500;
    let message = 'Internal Server Error';
  
    // Customize error handling based on error type
    if (err instanceof SyntaxError && 'body' in err && err.status === 400) {
      // Handle JSON parse error
      statusCode = 400;
      message = 'Bad Request';
    } else if (err instanceof YourCustomError) {
      // Handle specific custom error
      statusCode = err.statusCode;
      message = err.message;
    }
  
    // Send error response
    res.status(statusCode).json({ message });
  };
  
  module.exports = errorHandler;
  