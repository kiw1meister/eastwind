const express = require('express');
const knex = require('./knex');
const app = express();
const cors = require('cors')

// Use port 8080
const PORT = 8080;

app.use(cors());

app.get("/test", (req, res) => {
    res.json("This is a test.")
})

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}!`);
});