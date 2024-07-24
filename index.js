const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello DevOps hello docker i have create ci-cd pipeline!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
