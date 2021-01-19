const express = require('express');
const path = require('path');
const app = express();

const PORT = 5050

app.use(express.static(path.join(__dirname, 'build')))

app.listen(PORT, () => {
    console.log(`Port is ${PORT}`)
})