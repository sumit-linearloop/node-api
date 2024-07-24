const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello DevOps ci-cd pipeline create and push kubernetes!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
