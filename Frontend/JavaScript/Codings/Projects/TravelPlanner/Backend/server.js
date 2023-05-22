const express = require('express')

// create an Express application
const app = express();
const port = 3000;

// define API routes
app.get('/',(req,res) => {
    // handle get request for fetching users
    // use your logic below
    res.json({message: 'Get all users'});
});