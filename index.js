const express = require('express');

const app = express();
const port = 9000;

const handleRoute = function (req, res){
    res.send('Hello World');
  };

// user
app.get('/', handleRoute);

app.post('/another-route', function (req, res){
  res.send('Hello to another route');
})
app.put('/put-route', function (req, res){
  res.send('this is a put route');
})
app.delete('/delete-route', function(req, res){
  res.send('this is delete route');
})

app.listen(port, function() {
   console.log(`Example app listening on port ${port}!`);
})