const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for reservations (can be replaced with a database)
let reservations = [];

// Endpoint to get all reservations
app.get('/api/reservations', (req, res) => {
    res.json(reservations);
});

// Endpoint to create a new reservation
app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;
    reservations.push(newReservation);
    res.status(201).json(newReservation);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});