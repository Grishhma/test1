const express = require('express');
const app = express();

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log('This is a middleware function');
  // You can modify the request or response objects here
  next(); // Call next to pass control to the next middleware in the stack
};

// Use the middleware for all routes
app.use(myMiddleware);

// Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
