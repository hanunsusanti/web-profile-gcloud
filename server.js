const express = require('express');
const req = require('express/lib/request');
const path =  require('path');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname)+'/view/index.html');    
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, _ => {
    console.log(`App deployed at Port ${PORT}`);
});