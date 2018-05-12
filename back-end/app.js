//REQUIREMENTS

const express = require('express');
//body parser
//morgan

const port = 8000;
const app = express();

//PORT
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});