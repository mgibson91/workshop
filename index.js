const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/timmy', (req, res) => {
  res.send('Timoth\n');
});

app.listen(6000, function() {
  console.log('Server running');
});

// Function 1
const func1 = () => {

};

// Function 2
function func2() {

}
