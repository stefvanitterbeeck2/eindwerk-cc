const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from eindwerk-cc from CI/CD & GitOps app');
});

app.listen(3000, () => console.log('App running on port 3000'));