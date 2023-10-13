const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js with Hasura on Docker!');
});

// Request Handler
app.post('/getItem', (req, res) => {

  // get request input
  // const {  } = req.body.input;
  console.log("Hello World")
  console.log(req)
  // run some business logic


  /*
  // In case of errors:
  return res.status(400).json({
    message: "error happened"
  })
  */

  // success
  return res.json({
    item: "Sample Item",
    created: "Sample Created",
    updated: "Sample Update"
  })

});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
