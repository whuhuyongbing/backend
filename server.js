const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

// Sample data
const vocabularyLists = [
    {
        id: 1,
        words: [
{ word: 'Aberration', sentence: 'The ghost was an aberration in the old house1.', rating:0 },
{ word: 'Aberration', sentence: 'The ghost was an aberration in the old house2.', rating:1 },
{ word: 'Aberration', sentence: 'The ghost was an aberration in the old house3.', rating:2 },
{ word: 'Aberration', sentence: 'The ghost was an aberration in the old house4.', rating:3 }
            // Add 99 more words and sentences
        ]
    },
    // Add more lists as needed
];

app.get('/api/lists', (req, res) => {
    res.json(vocabularyLists);
});

app.get('/api/list/:id', (req, res) => {
    const list = vocabularyLists.find(l => l.id === parseInt(req.params.id));
    if (list) {
        res.json(list);
    } else {
        res.status(404).send('List not found');
    }
});


app.post('/api/rate', (req, res) => {
   
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
