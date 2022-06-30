const express = require('express');
const myExpress = new express();

myExpress.get('/', (req, res) => {
    res.send('hello world');
});

myExpress.listen(8000, () => {
    console.log('server is running');
});