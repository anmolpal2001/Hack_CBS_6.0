const cors = require('cors'); 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.get('/anmol', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
    // Replace this with your code to read and send the JSON data
    const jsonData = require('./newdata.json');
    res.json(jsonData);
  });
  