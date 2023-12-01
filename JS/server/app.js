const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

// Database connection
const pool = mysql.createPool(config);
const connection = pool.promise();

// Middleware for parsing JSON
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Default route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the web application!');
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const [results, fields] = await connection.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful!' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
