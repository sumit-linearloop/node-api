const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello DevOps I am working DevOps Engineer and aws and docker!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
