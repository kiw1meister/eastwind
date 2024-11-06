const express = require('express');
const knex = require('./knex');
const app = express();
const cors = require('cors')

// Use port 8080
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
    res.json("This is a test.")
})

app.get('/quiz/questions', async (req, res) => {
    try {
        const questions = await knex('questions')
            .orderByRaw('RANDOM()')
            .limit(10);
        res.json(questions);
    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).json({ error: 'Error fetching questions' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}!`);
});