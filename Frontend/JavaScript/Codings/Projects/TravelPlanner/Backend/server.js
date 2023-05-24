const express = require('express');

// Create an Express application
const app = express();
const port = 3000;


// Middleware to parse JSON request bodies
app.use(express.json());

// Define API routes
app.get('/', (req,res) => {
  res.send('Hello, world!');
});

// Example API route to handle GET request
app.get('/api/users', (req, res) => {
    // Replace this with your actual implementation
    const users = [
      { id: 1, name: 'Gohul Nath V' },
      { id: 2, name: 'Pavithran R' }
    ];
    res.json(users);
  });

  // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});